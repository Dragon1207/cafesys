/*
    Variable Grid System.
    Learn more ~ http://www.spry-soft.com/grids/
    Based on 960 Grid System - http://960.gs/

    Licensed under GPL and MIT.
*/


/* Containers
----------------------------------------------------------------------------------------------------*/
.container_12 {
    margin-left: auto;
    margin-right: auto;
    width: 960px;
}

/* Grid >> Global
----------------------------------------------------------------------------------------------------*/

.grid_1,
.grid_2,
.grid_3,
.grid_4,
.grid_5,
.grid_6,
.grid_7,
.grid_8,
.grid_9,
.grid_10,
.grid_11,
.grid_12 {
    display:inline;
    float: left;
    position: relative;
    margin-left: 10px;
    margin-right: 10px;
}

/* Grid >> Children (Alpha ~ First, Omega ~ Last)
----------------------------------------------------------------------------------------------------*/

.alpha {
    margin-left: 0;
}

.omega {
    margin-right: 0;
}

/* Grid >> 12 Columns
----------------------------------------------------------------------------------------------------*/

.container_12 .grid_1 {
    width:60px;
}

.container_12 .grid_2 {
    width:140px;
}

.container_12 .grid_3 {
    width:220px;
}

.container_12 .grid_4 {
    width:300px;
}

.container_12 .grid_5 {
    width:380px;
}

.container_12 .grid_6 {
    width:460px;
}

.container_12 .grid_7 {
    width:540px;
}

.container_12 .grid_8 {
    width:620px;
}

.container_12 .grid_9 {
    width:700px;
}

.container_12 .grid_10 {
    width:780px;
}

.container_12 .grid_11 {
    width:860px;
}

.container_12 .grid_12 {
    width:940px;
}



/* Prefix Extra Space >> 12 Columns
----------------------------------------------------------------------------------------------------*/

.container_12 .prefix_1 {
    padding-left:80px;
}

.container_12 .prefix_2 {
    padding-left:160px;
}

.container_12 .prefix_3 {
    padding-left:240px;
}

.container_12 .prefix_4 {
    padding-left:320px;
}

.container_12 .prefix_5 {
    padding-left:400px;
}

.container_12 .prefix_6 {
    padding-left:480px;
}

.container_12 .prefix_7 {
    padding-left:560px;
}

.container_12 .prefix_8 {
    padding-left:640px;
}

.container_12 .prefix_9 {
    padding-left:720px;
}

.container_12 .prefix_10 {
    padding-left:800px;
}

.container_12 .prefix_11 {
    padding-left:880px;
}



/* Suffix Extra Space >> 12 Columns
----------------------------------------------------------------------------------------------------*/

.container_12 .suffix_1 {
    padding-right:80px;
}

.container_12 .suffix_2 {
    padding-right:160px;
}

.container_12 .suffix_3 {
    padding-right:240px;
}

.container_12 .suffix_4 {
    padding-right:320px;
}

.container_12 .suffix_5 {
    padding-right:400px;
}

.container_12 .suffix_6 {
    padding-right:480px;
}

.container_12 .suffix_7 {
    padding-right:560px;
}

.container_12 .suffix_8 {
    padding-right:640px;
}

.container_12 .suffix_9 {
    padding-right:720px;
}

.container_12 .suffix_10 {
    padding-right:800px;
}

.container_12 .suffix_11 {
    padding-right:880px;
}



/* Push Space >> 12 Columns
----------------------------------------------------------------------------------------------------*/

.container_12 .push_1 {
    left:80px;
}

.container_12 .push_2 {
    left:160px;
}

.container_12 .push_3 {
    left:240px;
}

.container_12 .push_4 {
    left:320px;
}

.container_12 .push_5 {
    left:400px;
}

.container_12 .push_6 {
    left:480px;
}

.container_12 .push_7 {
    left:560px;
}

.container_12 .push_8 {
    left:640px;
}

.container_12 .push_9 {
    left:720px;
}

.container_12 .push_10 {
    left:800px;
}

.container_12 .push_11 {
    left:880px;
}



/* Pull Space >> 12 Columns
----------------------------------------------------------------------------------------------------*/

.container_12 .pull_1 {
    left:-80px;
}

.container_12 .pull_2 {
    left:-160px;
}

.container_12 .pull_3 {
    left:-240px;
}

.container_12 .pull_4 {
    left:-320px;
}

.container_12 .pull_5 {
    left:-400px;
}

.container_12 .pull_6 {
    left:-480px;
}

.container_12 .pull_7 {
    left:-560px;
}

.container_12 .pull_8 {
    left:-640px;
}

.container_12 .pull_9 {
    left:-720px;
}

.container_12 .pull_10 {
    left:-800px;
}

.container_12 .pull_11 {
    left:-880px;
}




/* Clear Floated Elements
----------------------------------------------------------------------------------------------------*/

/* http://sonspring.com/journal/clearing-floats */

.clear {
    clear: both;
    display: block;
    overflow: hidden;
    visibility: hidden;
    width: 0;
    height: 0;
}

/* http://perishablepress.com/press/2008/02/05/lessons-learned-concerning-the-clearfix-css-hack */

.clearfix:after {
    clear: both;
    content: ' ';
    display: block;
    font-size: 0;
    line-height: 0;
    visibility: hidden;
    width: 0;
    height: 0;
}

.clearfix {
    display: inline-block;
}

* html .clearfix {
    height: 1%;
}

.clearfix {
    display: block;
}
