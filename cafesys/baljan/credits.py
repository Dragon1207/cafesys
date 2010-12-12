# -*- coding: utf-8 -*-
from baljan.models import BalanceCode, OldCoffeeCard
from datetime import datetime
from baljan.util import get_logger
from datetime import datetime
from django.conf import settings

log = get_logger('baljan.credits')

class CreditsError(Exception):
    pass

class BadCode(CreditsError):
    pass

def used_by(user, old_card=False):
    if old_card:
        return OldCoffeeCard.objects.filter(
            user=user,
        ).order_by('-id')
    else:
        return BalanceCode.objects.filter(
            used_by=user,
        ).order_by('-used_at', '-id')


def get_unused_code(entered_code, old_card=False):
    """Can return either an `OldCoffeeCard` or a `BalanceCode` depending
    on the value of the `old_card` parameter."""
    now = datetime.now()
    try:
        if old_card:
            stringed = str(entered_code)
            code_len = 6
            card_id = int(stringed[:-code_len], 10)
            code = int(stringed[-code_len:], 10)
            oc = OldCoffeeCard.objects.get(
                card_id=card_id,
                code__exact=code,
                user__isnull=True,
                imported=False,
                expires__gte=now,
            )
            return oc
        else:
            bc = BalanceCode.objects.get(
                code__exact=entered_code,
                used_by__isnull=True,
                used_at__isnull=True,
            )
            return bc
    except OldCoffeeCard.DoesNotExist:
        raise BadCode()
    except BalanceCode.DoesNotExist:
        raise BadCode()


def is_used(entered_code, lookup_by_user=None, old_card=False):
    """Set `old_card` to true if you are looking for an old coffee card."""
    try:
        bc_or_oc = get_unused_code(entered_code, old_card)
        if lookup_by_user:
            log.info('%r found %r unused' % (lookup_by_user, entered_code))
        return not bc_or_oc
    except BadCode:
        if lookup_by_user:
            log.info('%r found %r used or invalid' % (lookup_by_user, entered_code))
        return True


def manual_refill(entered_code, by_user):
    try:
        use_code_on(get_unused_code(entered_code), by_user)
        return True
    except Exception, e:
        log.warning('%r tried bad code %r (caught %r)' % (by_user, entered_code, e))
        raise BadCode()


def manual_import(entered_code, by_user):
    try:
        oc = get_unused_code(entered_code, old_card=True)
        oc.user = by_user
        oc.imported = True
        profile = by_user.get_profile()
        assert profile.balance_currency == 'SEK'
        profile.balance += oc.left * settings.KLIPP_WORTH
        profile.save()
        oc.save()
        log.info('%r imported %r' % (by_user, oc))
        return True
    except Exception, e:
        log.warning('%r tried bad code %r (caught %r)' % (by_user, entered_code, e))
        raise BadCode()


def use_code_on(bc, user):
    assert bc.used_by is None
    assert bc.used_at is None
    profile = user.get_profile()
    assert bc.currency == profile.balance_currency
    bc.used_by = user
    bc.used_at = datetime.now()
    bc.save()
    profile.balance += bc.value
    profile.save()
    log.info('%r used %r' % (user, bc))
    return True
