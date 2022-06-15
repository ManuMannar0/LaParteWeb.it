THE BLOG V3

The only way to interact with the core project and the only position where to put your components is inside 'THE_BLOG' folder.
Inside the folder you will find some 'ready to start' files with some info inside.

**************************************************************************
******************************START HERE**********************************
**************************************************************************

!  - one wp account as "administrator" and one "editor" account (for customer) to avoid configuration disasters.
0  - choose 2021 theme (normaly, is the right and simple theme)
1  - install and actives 'wp-rest-api-v2-menus' (Claudio La Barbera) and 'Advanced Custom Fields' plugin (Version 5.11.4 | By Delicious Brains) plugins
3  - copy customWPRestAPI.php inside the active theme folder **(*)**
4  - copy this -> <?php include 'customWPRestAPI.php';?> in the first line of function.php **(*)**
5  - create the menu
6  - create categories (you should find them in 'THE_BLOG_Settings.js')
7  - add categories to the menu
2  - setup THE_BLOG_Settings.js
8  - set up 'Advance Custom Fields' plugin depending on features (language, shop ecc..)



**************************************************************************
**************************DEVELOPER MANUAL********************************
**************************************************************************

*GENERAL*

# CUSTOM WP REST API
Add customWPRestAPI.php in the function.php's root (/[wordpress folder]/themes/[your active theme]/).
Then, include the files in function.php like this: <?php include 'customWPRestAPI.php';?>
It will give you additional custom field in wp rest api json response.
You can edit, adding other field.
Use it only when a field need logic.
For simple field like text field, input like form ecc. use plugin (**(*)**)
# META 
Edit it in public folder



*SERVICES*

# STORE SERVICE
Required const currency = 'something' (e.g: '€' or '$').
WP additional field -> Custom rest API -> FE **(*)**
In the 'name' field, in additional field in WP post page, set 'price' (the same in customWPRestAPI.php)
Set a number value in the 'value' field (e.g.: '15.99').
# MULTY LANGUAGE SERVICE
Required a const for language for menu button and state.
E.g.: 
const ita = 'ita'
const eng = 'eng'
Required const for default language.
E.g.:
const defaultLanguage = 'ita'
This consts must be characters, no more then 10 characters, no numbers, no spaces, no special characters.
WP additional field -> Custom rest API -> FE **(*)**
In the 'name' field, in additional field in WP post page, set 'language' (the same in customWPRestAPI.php)
Set 3 character in the 'value' field (e.g.: 'eng').

**NOTE**
'Advance Custom Fields' plugin (Version 5.11.4 | By Delicious Brains) installed in WP. 
Simply install the plugin, create your fields, set 'Show in REST API' for every field and retrive values from 'WP-REST-API', under 'acf' key.



**************************************************************************
*****************************USER MANUAL**********************************
**************************************************************************

# FEATURED IMAGE
Write the caption in article
# CATEGORIES
Remember both parent category and subcatecory (if no category is set or the category is 'without category', the post will be isVisible in home only). If u put only the first category the post will show only in the first categoty and no in the sub categories.
# HOMEPAGE
Sticky option is like 'all categories'. In home page all sticky post will be isVisible. If post hasn't category, it will be isVisible regardless of sticky option.
# CUSTOM FIELD **(*)**
Set additional values (at the bottom of the page in wordpress):
Price -> number value on 'price' additional field (opional. if not present, the price field in post won't activen).
Language -> 'ita' or 'eng' value on 'language' (required. if not present, post will alway be isVisible).
# COMPLEX POST
You can create very complex post in WP, but the front-end site is mangaed outside WP, so your site could be not as aspected.
Ask to your developers to resolve the styles you want see correctly.

**NOTE**
Use 'Advance Custom Fields' plugin (Version 5.11.4 | By Delicious Brains) for simple field like:
Price -> simply add a number value from 0 to 100000.
Language -> simply choose your language. With default settings posts has a default language (ask for your developer to change it, in case) 
