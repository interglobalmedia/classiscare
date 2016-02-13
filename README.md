This project was a collaboration between Jason Maran and myself, Maria Campbell. We come up with the idea right after Halloween. I was thinking a Netflix type of business, and he suggested somekind of thematic idea, and we ended up with "Classiscare", the Netflix of classic scary movies.

We wanted to make sure that there was a consistent look throughout the site, so I came up with the framework and look as a giudeline, and then Jason took it from there with his pages. he did the universal.html page, the hammer.html page, and and the silent.html page. The framework consists of the concept of the header, gradients in header and body, navigation, and general layout of the page. took that as a guideline and then did his own thing. He also wrote his own original copy on his pages. I used TCM Classic Movies as my "Lorem Ipsum" for the Val Lewton Page, but wrote my own copy for the Home Page.

I used the Drawer plugin to create the "drawer" for the navigation in responsive widths (up to max 767px). It was quite a challenge to work with and I had to make a number of adaptions to the plugin to make it work. I had to get to know what markup was what for the index pages, because one set would result in one thing, and another would result in another. There also were glitches in the code, so I had to get to know drawer.min.css and drawer.min.js intimately in order make the plugin work. For instance, initially, the only time that the drawer would show up was in 767px, so I had to figure out what was causing that and change it. So I finally found the culprit in the CSS. Instead of a max-767px for the responsive, there was a min-767px. And it remained that way until I figured out how to enable the drawer. There were several factors involved. It actually ended up that I had to use a different set of markup than I was in the html pages, so since I had chosen to use the fixed navbar on the site, I had to remove the "drawer-responsive" navbar. I also narrowed the width of the drawer, first of all because it made more sense in smaller screens, and second of all because it was aesthetically better to look at. To me at least, the instructions and implementation of this drawer were not very intuitive or clear. But that could also be because I am learning.

To find the right links (located at the bottom of the page) that were necessary for the jQuery and iscroll (necessary for the navbar among other things that we don't have implemented here), because some of the links they had in their instructions were too old. I found that out when I would go into the developer console to check my code. Finally, Horatio showed me that the only way that any of the <link>s (except for the <script src="https://code.jquery.com/jquery-2.1.4.js"></script> that I pulled off of jquery.com because the one they provided was too old and didn't work) was by adding http:// instead of https. So after some more finagling, it ended up that I had to keep the http:// for <script src="http://cdnjs.cloudflare.com/ajax/libs/iScroll/5.1.1/iscroll-min.js"></script> and
<script src="http://cdn.rawgit.com/ungki/bootstrap.dropdown/3.3.1/dropdown.min.js"></script>.

Obviously, it didn't work out of the box. It had to be set up. That was something for me to figure out. I had to decipher the code in the dist/jquery.drawer.min.js and dist/jquery.drawer.js (it was just the easier version of the drawer js file to read, but not necessary to include to function). The result was what I created in my own drawer.js file. I could have added more features to the site, but I thougbt that this was enough. There was already a lot going on between the layout, the gifs, and the fixed navigation and drawer. If you would like us to add more features just for the heck of it, just let us know.

It was also quite a challenge to modify the width of the pages for @media queries because of the layout. But it was a lot of fun, and I learned a lot. Horatio was very helpful when I went in for office hours. He made me think of different ways to approach my challenges.

To view this project here on Github, please visit http://interglobalmedia.github.io/classiscare/