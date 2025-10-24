// This file contains a curated list of 25 classic Christmas recipes.
// It is used as a fallback data source if the Gemini API rate limit is exceeded.

export interface FallbackRecipe {
  title: string;
  description: string;
  ingredients: string[] | Record<string, string[]>;
  instructions: string[];
}

export const fallbackRecipes: FallbackRecipe[] = [
  {
    "title": "Easy Christmas Cutout Cookies",
    "description": "A simple, tender, and delicious sugar cookie, perfect for cutting into festive shapes and decorating with royal icing. This is a classic, no-fail recipe for holiday baking.",
    "ingredients": [
      "1 cup (227g) unsalted butter, room temperature",
      "1 cup (199g) granulated sugar",
      "1 large egg, room temperature",
      "2 large egg yolks, room temperature",
      "3 teaspoons vanilla extract",
      "3 1/4 cups (380g) all-purpose flour",
      "1/4 teaspoon salt"
    ],
    "instructions": [
      "In a large bowl, use an electric mixer to beat the butter and sugar until light and fluffy.",
      "Add the egg, egg yolks, and vanilla, and beat until combined.",
      "In a separate bowl, whisk together the flour and salt.",
      "Gradually add the flour mixture to the butter mixture, mixing on low speed until just combined. The dough should be stiff.",
      "Divide the dough in half and wrap tightly in plastic wrap. Refrigerate for at least 3 hours or overnight.",
      "Preheat the oven to 375°F (190°C). Line two baking sheets with parchment paper.",
      "On a lightly floured surface, roll one disk of dough out to 1/4-inch thickness.",
      "Use cookie cutters to cut out shapes and place them on the prepared baking sheets.",
      "Bake for 8-11 minutes, or until lightly golden around the edges.",
      "Let cool on the baking sheet for 15 minutes before transferring to a cooling rack to cool completely before decorating."
    ]
  },
  {
    "title": "Easy Christmas Fruit Cake",
    "description": "A moist, easy-to-make fruit cake that doesn't require weeks of aging. It's packed with dried fruit and festive spices, perfect for a modern Christmas.",
    "ingredients": [
      "855g (30 oz) mixed dried fruit (e.g., raisins, glace cherries, dried apricots, mixed peel, dates)",
      "1 cup + 2 tbsp apple juice (or 1/3 brandy + 2/3 juice)",
      "120g (8 tbsp) unsalted butter, softened",
      "1 1/2 cups dark brown sugar, packed",
      "1/2 cup vegetable oil",
      "3 tbsp molasses or golden syrup",
      "1/2 tsp salt",
      "1/2 tsp allspice",
      "1/2 tsp cinnamon",
      "1/2 tsp nutmeg",
      "3 large eggs",
      "1/2 tsp baking powder",
      "1 2/3 cups all-purpose flour",
      "3/4 cup walnuts, chopped (optional)"
    ],
    "instructions": [
      "Place dried fruit and juice/brandy in a large microwaveable container. Microwave for 1 1/2 minutes on high. Stir, cover, and set aside for 1 hour to soak and cool.",
      "Preheat oven to 320°F (160°C). Grease and line a 8-9 inch round cake pan (at least 2.75\" tall) with parchment paper.",
      "Using an electric beater, beat butter and sugar until smooth and creamy (about 1 minute).",
      "Add oil and molasses, beat until combined. Add salt, spices, and baking powder, and beat until incorporated.",
      "Add eggs one at a time, beating until just incorporated.",
      "Stir in the flour. When mostly combined, stir in the soaked fruit mixture (including all liquid) and walnuts (if using).",
      "Pour batter into the prepared cake pan and smooth the top.",
      "Cover with foil and bake for 2.5 hours. Remove foil and bake for another 30-45 minutes, or until a skewer inserted into the center comes out clean.",
      "Cool in the pan completely before removing."
    ]
  },
  {
    "title": "Easy Peppermint Bark",
    "description": "A classic no-bake Christmas candy with a layer of rich semisweet chocolate, a layer of creamy white chocolate, and a crunchy candy cane topping.",
    "ingredients": [
      "12 ounces (375g) semisweet chocolate, chopped",
      "16 ounces (450g) high-quality white chocolate, chopped",
      "1/2 teaspoon peppermint extract",
      "7 candy canes, crushed (about 2/3 cup)"
    ],
    "instructions": [
      "Line an 8x8-inch baking dish or a baking sheet with parchment paper, leaving an overhang to lift it out later.",
      "Place the semisweet chocolate in a medium heat-proof bowl. Melt it over a pot of simmering water (double boiler) or in the microwave in 30-second intervals at 50% power, stirring between each, until smooth.",
      "Pour the melted semisweet chocolate into the prepared pan and spread it in an even layer with a spatula.",
      "Chill for about 20 minutes, or until firm to the touch but not completely solid.",
      "Place the white chocolate in a separate clean, dry bowl and melt it using the same method as the semisweet chocolate.",
      "Once melted, remove from heat and stir in the peppermint extract.",
      "Stir in about 1/3 cup of the crushed candy canes.",
      "Pour the white chocolate mixture evenly over the set semisweet chocolate layer and smooth it out.",
      "Sprinkle the remaining crushed candy canes on top, gently pressing them into the white chocolate.",
      "Refrigerate until completely set, about 1 hour.",
      "Once firm, lift the bark out of the pan using the parchment paper and break it into pieces."
    ]
  },
  {
    "title": "Gingerbread Men Cookies",
    "description": "The quintessential Christmas cookie! These classic spiced cookies are soft in the middle, crisp on the edges, and perfect for decorating.",
    "ingredients": [
      "375g plain flour",
      "1 tsp bicarbonate of soda",
      "3 tsps ground ginger",
      "120g unsalted butter, cold & cubed",
      "175g light brown sugar",
      "5 tbsps golden syrup",
      "1 medium egg"
    ],
    "instructions": [
      "Preheat your oven to 375°F (190°C) and line 3-4 baking trays with parchment paper.",
      "Add the flour, bicarbonate of soda, and ginger to a large bowl. Add the cold, cubed butter.",
      "Rub the butter into the flour mixture with your fingers until it resembles breadcrumbs.",
      "Stir in the light brown sugar.",
      "Add the golden syrup and egg. Mix with a spatula or your hands until a smooth dough forms.",
      "Knead the dough briefly on a lightly floured surface.",
      "Roll the dough out to 1/2cm thickness and cut out your gingerbread men shapes.",
      "Place the cookies on the prepared baking trays, leaving space between them.",
      "Bake for 10-12 minutes, or until golden brown.",
      "Let cool on the trays for a few minutes before moving to a wire rack to cool completely."
    ]
  },
  {
    "title": "Classic Rum Balls",
    "description": "A festive and boozy no-bake treat, these rum balls are made with cookie crumbs, pecans, cocoa, and spiced rum. They get better as they sit!",
    "ingredients": [
      "3 cups crushed vanilla wafer cookies",
      "3/4 cup confectioners' sugar (plus more for rolling)",
      "1/4 cup unsweetened cocoa powder",
      "1 1/2 cups finely chopped pecans",
      "1 teaspoon pure vanilla extract",
      "3 tablespoons light corn syrup",
      "1/2 cup spiced rum"
    ],
    "instructions": [
      "In a large bowl, stir together the crushed vanilla wafers, 3/4 cup confectioners' sugar, cocoa powder, and chopped pecans.",
      "In a small bowl, whisk together the vanilla extract, corn syrup, and spiced rum.",
      "Pour the wet ingredients into the dry ingredients and stir well to fully incorporate, making sure no dry bits remain. The mixture should be moist enough to hold a ball shape when squeezed.",
      "Use a small cookie scoop or spoon to portion the mixture and roll it into 1-inch balls.",
      "Place your desired coating (e.g., additional confectioners' sugar, cocoa powder, or sprinkles) in a shallow bowl.",
      "Roll each ball in the coating until evenly covered.",
      "Store in an airtight container in the refrigerator. The flavor improves after a day or two."
    ]
  },
  {
    "title": "Bûche de Noël (Yule Log Cake)",
    "description": "A traditional Christmas dessert, this is a chocolate sponge cake roll filled with whipped cream and covered in chocolate frosting to resemble a log.",
    "ingredients": {
      "cake": [
        "4 eggs, separated",
        "1/2 cup granulated sugar",
        "1/4 cup unsweetened cocoa powder",
        "1/3 cup cake flour",
        "1/2 tsp instant coffee granules",
        "1 tsp baking powder",
        "1/4 tsp salt"
      ],
      "filling": [
        "1 cup heavy whipping cream",
        "1/4 cup powdered sugar",
        "1/2 tsp vanilla extract"
      ],
      "frosting": [
        "6 oz dark or bittersweet chocolate chips (3/4 cup)",
        "1.5 tbsp softened unsalted butter",
        "1 tsp instant coffee granules",
        "2/3 cup heavy cream",
        "1/2 tbsp Kahlua (optional)",
        "1/2 tsp vanilla extract"
      ]
    },
    "instructions": [
      "Preheat oven to 425°F (220°C). Line a 15x10-inch jelly roll pan with parchment paper, leaving an overhang.",
      "Cake: In a large bowl, whisk egg yolks and sugar until pale yellow. In a separate bowl, sift cocoa powder, cake flour, coffee, baking powder, and salt. Add dry ingredients to the yolk mixture and whisk (batter will be very thick).",
      "In a clean bowl, beat egg whites on high speed until soft peaks form.",
      "Gently fold half of the egg whites into the thick batter to loosen it. Then, gently fold in the remaining half.",
      "Spread the batter evenly in the prepared pan. Bake for 6-7 minutes, or until the cake springs back when touched.",
      "Dust a clean kitchen towel with powdered sugar. Immediately invert the hot cake onto the towel. Peel off the parchment paper. Gently roll up the cake with the towel inside. Let cool completely on a wire rack.",
      "Filling: Beat heavy cream, powdered sugar, and vanilla until stiff peaks form.",
      "Frosting: Place chocolate, butter, and coffee in a bowl. Heat heavy cream until simmering and pour over the chocolate. Let sit for 5 minutes, then whisk until smooth. Whisk in Kahlua and vanilla. Let cool until it's a spreadable consistency.",
      "Assembly: Gently unroll the cooled cake. Spread the whipped cream filling evenly, leaving a small border. Reroll the cake (without the towel).",
      "Cut a small diagonal slice off one end of the log. Attach it to the side with frosting to create a 'branch'.",
      "Cover the entire log and branch with the chocolate frosting. Use a fork to create bark-like texture. Dust with powdered sugar for a 'snow' effect."
    ]
  },
  {
    "title": "Eggnog Cheesecake",
    "description": "A creamy, festive cheesecake with all the classic flavors of eggnog, including nutmeg and a hint of rum, all on a graham cracker crust.",
    "ingredients": {
      "crust": [
        "1 1/2 cups graham cracker crumbs",
        "1/4 cup melted butter",
        "2 tbsp granulated sugar"
      ],
      "cheesecake": [
        "4 pkg (8 oz each) brick-style cream cheese, softened",
        "1 cup granulated sugar",
        "1 1/4 tsp freshly grated nutmeg (or 1/2 tsp ground)",
        "1/4 tsp salt",
        "4 large eggs",
        "2 1/2 tsp rum extract (or vanilla)"
      ],
      "topping": [
        "1 cup whipping cream",
        "2 tbsp granulated sugar",
        "1 tsp vanilla extract"
      ]
    },
    "instructions": [
      "Crust: Preheat oven to 350°F (180°C). Combine crumbs, melted butter, and 2 tbsp sugar. Press firmly into the bottom of a 9-inch springform pan. Bake for 10-15 minutes. Cool completely.",
      "Reduce oven to 325°F (160°C).",
      "Cheesecake: In a large bowl, beat cream cheese until smooth. Beat in 1 cup sugar, nutmeg, and salt until fluffy.",
      "Beat in eggs one at a time, mixing on low speed until just combined. Stir in rum extract.",
      "Pour batter over the cooled crust. Place the pan in a large roasting pan and create a water bath by pouring hot water into the roasting pan to come halfway up the sides of the springform pan.",
      "Bake for 70 minutes, or until the center is set but jiggles slightly.",
      "Turn off the oven and let the cheesecake cool in the oven with the door ajar for 1 hour. Remove from water bath and cool to room temperature.",
      "Refrigerate for at least 4 hours or overnight.",
      "Topping: Before serving, beat whipping cream with 2 tbsp sugar and vanilla until stiff peaks form. Dollop or pipe over the cheesecake and dust with more nutmeg."
    ]
  },
  {
    "title": "Soft and Chewy Sugar Cookies (Drop-Style)",
    "description": "A simple, soft, and chewy drop-style sugar cookie that requires no chilling or rolling. Perfect for a quick and easy festive treat.",
    "ingredients": [
      "2 1/2 cups (318g) all-purpose flour",
      "2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "2 sticks (226g) unsalted butter, at cool room temperature",
      "1 1/4 cups (250g) granulated sugar",
      "1 large egg + 1 egg yolk",
      "1 teaspoon vanilla extract",
      "1/4 cup (50g) granulated sugar, for rolling"
    ],
    "instructions": [
      "Preheat oven to 350°F (175°C). Line baking sheets with parchment paper.",
      "In a medium bowl, whisk together the flour, baking powder, and salt.",
      "In a large bowl, beat the butter and 1 1/4 cups of sugar with an electric mixer until light and fluffy.",
      "Beat in the egg, egg yolk, and vanilla extract until combined.",
      "On low speed, gradually add the flour mixture and mix until just combined. Do not overmix.",
      "Place the 1/4 cup of rolling sugar in a small bowl.",
      "Scoop dough into 2-tablespoon-sized balls (a medium cookie scoop works well). Roll each ball in the sugar to coat.",
      "Place the balls on the prepared baking sheets, about 2 inches apart.",
      "Bake for 10-12 minutes, or until the edges are just beginning to brown. The centers should still look soft.",
      "Let cool on the baking sheets for a few minutes before transferring to a wire rack to cool completely."
    ]
  },
  {
    "title": "Cranberry Bliss Bars",
    "description": "A popular coffee-shop copycat, these chewy blondie bars are packed with white chocolate chips and dried cranberries, topped with a cream cheese frosting.",
    "ingredients": {
      "bars": [
        "1 cup packed dark brown sugar",
        "3/4 cup butter, softened",
        "3 large eggs",
        "1 teaspoon vanilla extract",
        "1/2 teaspoon salt",
        "1 1/2 cups all-purpose flour",
        "1/2 teaspoon baking powder",
        "3/4 cup chopped sweetened dried cranberries, divided",
        "1 cup white chocolate chips"
      ],
      "frosting": [
        "3 cups confectioners' sugar",
        "1/2 (8 ounce) package cream cheese, softened",
        "1 tablespoon lemon or orange juice",
        "1 teaspoon vanilla extract"
      ]
    },
    "instructions": [
      "Frosting: Beat 3 cups confectioners' sugar, cream cheese, juice, and 1 tsp vanilla in a bowl until smooth. Cover and refrigerate.",
      "Bars: Preheat oven to 350°F (175°C). Butter a 9x13-inch baking pan.",
      "In a large bowl, beat brown sugar and butter until smooth. Beat in eggs one at a time. Stir in 1 tsp vanilla and salt.",
      "In a separate bowl, whisk flour and baking powder. Add to the wet ingredients and mix until smooth.",
      "Fold in 1/2 cup of the dried cranberries and all the white chocolate chips.",
      "Spread batter evenly in the prepared pan.",
      "Bake for 25-30 minutes, or until a toothpick inserted in the center comes out clean. Cool completely in the pan.",
      "Spread the chilled frosting evenly over the cooled bars. Sprinkle with the remaining 1/4 cup dried cranberries.",
      "Refrigerate until the frosting is set, about 1-2 hours.",
      "Cut into triangles or bars to serve."
    ]
  },
  {
    "title": "Classic Shortbread Cookies",
    "description": "A rich, buttery, and crumbly cookie made with just three essential ingredients. A timeless holiday classic.",
    "ingredients": [
      "1 cup (2 sticks) unsalted butter, at room temperature",
      "2/3 cup granulated sugar",
      "1 teaspoon vanilla extract (optional, but recommended)",
      "2 1/2 cups all-purpose flour",
      "1/2 teaspoon sea salt"
    ],
    "instructions": [
      "In the bowl of a stand mixer, cream the butter. Add the sugar and vanilla and beat until fluffy.",
      "Add the flour and salt and mix on low speed until just combined. The dough will be crumbly.",
      "Turn the dough out onto a lightly floured surface and divide in half. Shape each half into a rectangular block about 2 inches wide and 1 inch thick.",
      "Wrap each block in plastic wrap and chill for at least 1 hour, or until firm.",
      "Preheat the oven to 350°F (175°C). Line 2 baking sheets with parchment paper.",
      "Unwrap one block of dough and use a sharp knife to cut it crosswise into 1/2-inch-thick slices.",
      "Arrange the slices on the prepared baking sheets. Use a toothpick to poke holes in a decorative pattern.",
      "Bake for 10-12 minutes. The cookies should be pale, with just a hint of golden brown on the edges.",
      "Let cool on the baking sheets for 5 minutes before transferring to a wire rack to cool completely. Repeat with the second block of dough."
    ]
  },
  {
    "title": "Chocolate Crinkle Cookies",
    "description": "Fudgy, brownie-like cookies rolled in powdered sugar that 'crinkles' as they bake, revealing the dark chocolate cookie underneath.",
    "ingredients": [
      "75g (1/3 cup) neutral oil",
      "100g (1/2 cup) light or dark brown sugar",
      "50g (1/4 cup) granulated sugar",
      "1 large egg, at room temperature",
      "1 tsp vanilla extract",
      "1/2 tsp kosher salt",
      "30g (1/3 cup) dutch process cocoa powder, sifted",
      "130g (1 cup) all-purpose flour",
      "1/4 tsp baking soda",
      "Granulated sugar (for rolling)",
      "Powdered sugar (for rolling)"
    ],
    "instructions": [
      "Preheat the oven to 325°F (165°C). Line baking sheets with parchment paper.",
      "In a medium bowl, whisk together the oil, brown sugar, 50g granulated sugar, egg, and vanilla until well combined.",
      "In a separate bowl, sift together the salt, cocoa powder, flour, and baking soda.",
      "Add the dry ingredients to the wet ingredients and fold in with a rubber spatula until just combined. The dough will be soft.",
      "Place some granulated sugar and some powdered sugar in two separate shallow bowls.",
      "Scoop tablespoon-sized balls of dough. Roll each ball first in the granulated sugar (this helps the powdered sugar stick), then roll generously in the powdered sugar.",
      "Place the coated balls on the prepared baking sheets, about 2 inches apart.",
      "Bake for 12 minutes. The cookies will spread and crinkle.",
      "Let cool on the baking sheets for a few minutes before transferring to a wire rack."
    ]
  },
  {
    "title": "Italian Rainbow Cookies",
    "description": "A beautiful and delicious three-layer almond-paste cookie, colored to resemble the Italian flag, and sandwiched with jam and coated in chocolate.",
    "ingredients": [
      "280g (10 oz) almond paste",
      "350g (1 1/2 cups) butter, softened",
      "200g (1 cup) sugar",
      "5 large eggs, separated",
      "3/4 tsp salt",
      "75ml (1/3 cup) milk",
      "300g (2 1/2 cups) all-purpose flour",
      "Red and green food coloring",
      "250g (1 cup) raspberry jam",
      "450g (1 lb) semi-sweet chocolate, chopped"
    ],
    "instructions": [
      "Preheat oven to 325°F (163°C). Grease three 10x15-inch jelly roll pans and line them with parchment paper.",
      "In a large bowl, break up the almond paste. Add the butter and sugar and beat with an electric mixer until the almond paste is broken down and the mixture is smooth.",
      "Add the egg yolks and milk, mixing until combined. Add the flour and salt and mix until homogeneous.",
      "In a separate, clean bowl, whisk the egg whites until firm peaks form.",
      "Gently fold the egg whites into the almond mixture in two additions.",
      "Divide the batter evenly into three separate bowls. Add red food coloring to one bowl and green to another, leaving the third plain. Mix until colors are uniform.",
      "Spread each colored batter evenly into one of the prepared pans.",
      "Bake for 10-12 minutes, or until the edges are lightly golden. Let cool in the pans.",
      "Assembly: Place the green layer on a flat surface or a clean baking sheet. Spread evenly with half of the raspberry jam.",
      "Carefully top with the plain (white) layer. Spread with the remaining jam. Top with the red layer.",
      "Cover with plastic wrap, place another baking sheet on top, and weigh it down (e.g., with cans). Refrigerate for at least 4 hours or overnight.",
      "Melt half the chocolate. Pour over the top of the cookie stack and spread evenly. Refrigerate for 30 minutes, or until set.",
      "Flip the entire stack over. Melt the remaining chocolate and spread it over the bottom (now the top). Refrigerate until set.",
      "Trim the edges with a hot, sharp knife. Cut into 1-inch squares or rectangles."
    ]
  },
  {
    "title": "Classic Linzer Cookies",
    "description": "A traditional Austrian Christmas cookie. A buttery almond or hazelnut cookie is sandwiched with raspberry jam, with a small 'window' cutout on top.",
    "ingredients": [
      "1 cup unsalted butter, softened",
      "1 cup granulated sugar",
      "1/2 tsp salt",
      "1/2 tsp vanilla extract",
      "1 large egg",
      "3 cups all-purpose flour",
      "1 tsp baking soda",
      "1 cup seedless raspberry jam",
      "Powdered sugar, for dusting"
    ],
    "instructions": [
      "In an electric mixer, cream together the butter, sugar, and salt. Add the vanilla and egg and combine thoroughly.",
      "In a separate bowl, sift the flour and baking soda. On low speed, gradually add the flour mixture to the butter mixture until just combined.",
      "Separate the dough into two balls, wrap in plastic wrap, and refrigerate for at least 1 hour.",
      "Preheat the oven to 375°F (190°C). Line cookie sheets with parchment paper.",
      "On a lightly floured surface, roll out one portion of dough to 1/8-inch thickness.",
      "Cut out shapes (e.g., stars or circles). These will be the bottom cookies. Place on the baking sheet.",
      "Roll out the second portion of dough to 1/8-inch thickness. Cut out the same number of shapes. Using a smaller cutter, cut a 'window' out of the center of each of these cookies. These are the top cookies.",
      "Place the top cookies on a separate baking sheet.",
      "Bake all cookies for 8-10 minutes (the tops may bake faster) or until golden brown. Let cool completely on a wire rack.",
      "To assemble, spread a thin layer of raspberry jam on the bottom cookies. Dust the top 'window' cookies with powdered sugar.",
      "Gently place a powdered sugar top onto each jam-covered bottom."
    ]
  },
  {
    "title": "Classic Mince Pies",
    "description": "A beloved British Christmas tradition. Small, sweet pies filled with 'mincemeat'—a rich, spiced mixture of dried fruits and spirits.",
    "ingredients": {
      "pastry": [
        "250g plain flour",
        "25g icing sugar",
        "125g chilled unsalted butter, diced",
        "grated zest of 1 orange",
        "1 medium egg, lightly beaten",
        "1-3 tsp ice-cold water (if needed)"
      ],
      "filling": [
        "1 jar (about 400g) of high-quality mincemeat"
      ],
      "to finish": [
        "1 egg yolk, beaten with 1 tsp water (eggwash)",
        "Icing sugar or caster sugar, to dust"
      ]
    },
    "instructions": [
      "Pastry: In a food processor, pulse flour, icing sugar, butter, and orange zest into fine crumbs. Add the egg and pulse until the mixture forms clumps. Add cold water 1 tsp at a time if needed to bring it together. Do not overwork.",
      "Turn onto a lightly floured surface, knead briefly, and form into a disk. Wrap in plastic wrap and chill for at least 30 minutes.",
      "Preheat oven to 350°F (180°C). Lightly grease a 12-hole mince pie (muffin) tin.",
      "Roll out the pastry on a lightly floured surface to 1/8-inch thickness.",
      "Using a 3-inch fluted cutter, cut out 12 rounds and use them to line the tin.",
      "Put 1-2 tsp of mincemeat into each pastry case. Do not overfill.",
      "Re-roll the pastry trimmings. Using a 2-inch star or other festive cutter, cut 12 tops.",
      "Place the tops on the pies and press the edges gently.",
      "Brush the tops with the eggwash.",
      "Bake for 15-20 minutes, or until the pastry is golden and crisp.",
      "Let cool in the tin for a few minutes before transferring to a wire rack. Dust with sugar before serving."
    ]
  },
  {
    "title": "Sticky Toffee Pudding",
    "description": "A supremely moist and decadent British dessert, this consists of a date-sweetened sponge cake doused in a rich, warm toffee sauce.",
    "ingredients": {
      "pudding": [
        "5 ounces (3/4 cup) dates, pitted and roughly chopped",
        "1/2 teaspoon baking soda",
        "1/4 cup boiling water",
        "3 tablespoons (42g) unsalted butter, room temperature",
        "6 tablespoons (84g) light brown sugar",
        "1 large egg",
        "1/2 cup + 2 tablespoons (78g) all-purpose flour",
        "1/2 teaspoon baking powder"
      ],
      "toffee sauce": [
        "1/2 cup (1 stick) unsalted butter",
        "1 cup (225g) packed brown sugar",
        "2 tablespoons milk",
        "2 tablespoons heavy cream",
        "2 tablespoons corn syrup",
        "Pinch of kosher salt",
        "2 tablespoons bourbon (optional)"
      ]
    },
    "instructions": [
      "Pudding: Preheat oven to 350°F (175°C). Grease and flour a 6-cup muffin tin (or use ramekins).",
      "Place the chopped dates and baking soda in a heat-proof bowl. Pour the boiling water over them, press dates down, and let sit for 10 minutes. Puree the mixture with an immersion blender or in a regular blender.",
      "In a separate bowl, cream the 3 tbsp butter and 6 tbsp brown sugar until light and fluffy.",
      "Beat in the egg. On low speed, add the flour and baking powder, mixing until just combined.",
      "Stir in the date puree mixture until well combined.",
      "Divide the batter evenly among the prepared muffin cups.",
      "Bake for 17-19 minutes, or until a toothpick inserted in the center comes out clean.",
      "Toffee Sauce: While the cakes are baking, combine all sauce ingredients (except bourbon) in a small saucepan.",
      "Bring to a boil, stirring to dissolve the sugar, and boil for 3 minutes until thickened. Remove from heat and stir in bourbon, if using.",
      "To serve: Poke a few holes in the warm puddings. Pour some of the warm toffee sauce over them. Serve immediately, with extra sauce and vanilla ice cream or whipped cream."
    ]
  },
  {
    "title": "Easy English Trifle",
    "description": "A classic layered dessert that's perfect for a crowd. This version uses pound cake, vanilla pudding, strawberry jam, and fresh strawberries.",
    "ingredients": [
      "1 large (16 oz) pound cake, cut into cubes",
      "1 package (5 oz) instant vanilla pudding",
      "2 cups cold milk (or as per pudding package directions)",
      "1/2 cup strawberry jam",
      "1 lb fresh strawberries, sliced",
      "2 cups heavy whipping cream",
      "1/4 cup powdered sugar",
      "1 tsp vanilla extract"
    ],
    "instructions": [
      "Prepare the vanilla pudding: Whisk the instant pudding mix and cold milk together for 2 minutes. Let it set in the fridge for 5 minutes.",
      "Prepare the whipped cream: In a large bowl, beat the heavy cream, powdered sugar, and vanilla extract until stiff peaks form.",
      "Layer 1: Arrange half of the pound cake cubes in the bottom of a large glass trifle dish.",
      "Layer 2: Spread the strawberry jam evenly over the cake cubes.",
      "Layer 3: Spread half of the prepared vanilla pudding over the jam.",
      "Layer 4: Arrange half of the sliced strawberries on top of the pudding.",
      "Layer 5: Spread half of the whipped cream over the strawberries.",
      "Repeat Layers: Arrange the remaining pound cake cubes, then the remaining pudding, the remaining strawberries, and finally the remaining whipped cream.",
      "Garnish with a few whole strawberries or sprinkles, if desired.",
      "Chill for at least 2 hours in the fridge before serving to allow the layers to meld."
    ]
  },
  {
    "title": "Classic Italian Panettone",
    "description": "A traditional Italian sweet bread loaf, tall and dome-shaped, studded with candied fruits and raisins. It's a staple at Christmas.",
    "ingredients": [
      "4 tbsp warm milk",
      "1 tbsp dried yeast",
      "8 tbsp sugar (plus 1 tsp)",
      "2 sticks (1 cup) butter, room temperature",
      "5 large eggs, beaten",
      "2 tsp vanilla extract",
      "Grated zest of 1 lemon",
      "Grated zest of 1 orange",
      "3 1/2 to 4 cups all-purpose flour",
      "Pinch of salt",
      "7 tbsp raisins",
      "8 tbsp candied lemon and orange peel, finely chopped",
      "1 tbsp egg white (for topping)",
      "1 tbsp icing sugar (for topping)"
    ],
    "instructions": [
      "In a small bowl, combine the warm milk, yeast, and 1 tsp of sugar. Let sit for 5-10 minutes until foamy.",
      "In a large bowl, beat the remaining sugar and the butter until light and creamy.",
      "Beat in the beaten eggs, vanilla, lemon zest, and orange zest. Stir in the yeast mixture.",
      "Add 3 1/2 cups of flour and the salt. Mix with a dough hook or by hand to form a very soft, sticky dough. Add more flour, a tablespoon at a time, only if necessary to get the dough to pull away from the sides.",
      "Knead for 5-10 minutes until soft and elastic. The dough will be very soft.",
      "Place in a large, greased bowl, cover, and let rise in a warm place for 2-3 hours, or until doubled in size.",
      "Tip the dough onto a lightly floured surface. Knead in the raisins and candied peel.",
      "Shape the dough into a ball and place it in a Panettone paper mold (or a deep 8-inch cake pan lined with parchment paper to create a tall collar).",
      "Cover and let rise again for 1-2 hours, or until the dough has risen to the top of the mold.",
      "Preheat the oven to 350°F (175°C).",
      "For the topping, mix the egg white and icing sugar. Gently brush over the top of the Panettone.",
      "Bake for 45-55 minutes, or until golden and a long skewer inserted into the middle comes out clean. If it browns too quickly, cover loosely with foil.",
      "Let cool in the pan for 10 minutes before turning out onto a cooling rack. (Traditionally, Panettone is hung upside down to cool to prevent collapsing, but this is optional)."
    ]
  },
  {
    "title": "Classic Peanut Brittle",
    "description": "A classic, crunchy, old-fashioned candy loaded with peanuts. The baking soda gives it a light, airy, and 'brittle' texture.",
    "ingredients": [
      "1 cup white sugar",
      "1/2 cup light corn syrup",
      "1/4 cup water",
      "1/4 tsp salt",
      "1 cup peanuts (raw or roasted)",
      "2 tablespoons unsalted butter, softened",
      "1 teaspoon baking soda"
    ],
    "instructions": [
      "Grease a large rimmed baking sheet well. Have all ingredients measured and ready to go.",
      "In a heavy, 2-quart saucepan, combine the sugar, corn syrup, water, and salt. Stir over medium heat until the sugar is dissolved.",
      "Bring to a boil. Stir in the peanuts.",
      "Set a candy thermometer in place and continue cooking, stirring occasionally, until the temperature reaches 300°F (150°C), which is the hard-crack stage.",
      "Remove from the heat immediately. Quickly stir in the butter and baking soda (the mixture will foam up).",
      "Immediately pour the mixture onto the prepared baking sheet. Do not spread it thin with a spatula, as this will deflate the air bubbles. Instead, quickly use two forks to lift and pull the mixture to stretch it.",
      "Let cool completely until firm, at least 30 minutes.",
      "Once cool and hard, break the peanut brittle into pieces."
    ]
  },
  {
    "title": "Easy 3-Ingredient Christmas Fudge",
    "description": "A foolproof, creamy, and rich chocolate fudge that's made in the microwave. Perfect for last-minute gifts or parties.",
    "ingredients": [
      "1 can (14 ounces) sweetened condensed milk",
      "3 cups (18 oz) semi-sweet chocolate chips",
      "1/4 cup butter (salted or unsalted)",
      "1 teaspoon pure vanilla extract",
      "Christmas sprinkles (optional)"
    ],
    "instructions": [
      "Line an 8x8-inch baking pan with parchment paper, leaving an overhang on the sides to lift it out later.",
      "In a large microwave-safe bowl, combine the sweetened condensed milk, chocolate chips, and butter.",
      "Microwave on high for 60 seconds. Remove and stir. If not fully melted, microwave in 30-second intervals, stirring well after each, until the chocolate is completely melted and the mixture is smooth.",
      "Stir in the vanilla extract.",
      "Pour the fudge into the prepared pan and smooth the top with a spatula.",
      "Top with Christmas sprinkles, if desired, gently pressing them into the fudge.",
      "Refrigerate for at least 2 hours, or until firm.",
      "Once firm, use the parchment paper overhang to lift the fudge out of the pan. Cut into small squares."
    ]
  },
  {
    "title": "Russian Tea Cakes (Snowball Cookies)",
    "description": "Melt-in-your-mouth, buttery, and nutty shortbread-like cookies that are rolled in powdered sugar, resembling snowballs.",
    "ingredients": [
      "1 cup (2 sticks) unsalted butter, softened",
      "1/2 cup powdered sugar",
      "1 teaspoon vanilla extract",
      "2 1/4 cups all-purpose flour",
      "1/4 teaspoon salt",
      "3/4 cup finely chopped nuts (pecans or walnuts are traditional)",
      "Powdered sugar, for rolling"
    ],
    "instructions": [
      "Preheat oven to 400°F (200°C).",
      "In a large bowl, beat the butter, 1/2 cup powdered sugar, and vanilla with an electric mixer on medium speed until light and fluffy.",
      "In a separate bowl, whisk together the flour and salt.",
      "On low speed, gradually add the flour mixture to the butter mixture until combined. Stir in the chopped nuts.",
      "Shape the dough into 1-inch balls. Place about 1-2 inches apart on ungreased cookie sheets.",
      "Bake for 8-10 minutes, or until set but not brown. The bottoms should be very lightly golden.",
      "Let cool on the baking sheets for 5 minutes. While still warm (but not hot), roll the cookies in a bowl of powdered sugar until generously coated.",
      "Transfer to a wire rack to cool completely.",
      "Once completely cool, roll them in powdered sugar a second time for a thick, snowy coating."
    ]
  },
  {
    "title": "Easy Chocolate Truffles",
    "description": "Rich, decadent, and creamy two-ingredient chocolate truffles. A simple, elegant, and endlessly customizable holiday treat.",
    "ingredients": [
      "8 ounces (2 bars) high-quality semi-sweet chocolate, finely chopped",
      "2/3 cup heavy cream",
      "1/2 teaspoon vanilla extract (optional)",
      "Coatings: unsweetened cocoa powder, crushed nuts, sprinkles, or tempered chocolate"
    ],
    "instructions": [
      "Place the finely chopped chocolate in a heat-proof bowl.",
      "In a small saucepan, heat the heavy cream over medium heat until it is simmering (small bubbles form around the edges). Do not let it boil.",
      "Pour the hot cream over the chopped chocolate. Let it sit for 5 minutes without stirring.",
      "Add the vanilla extract (if using) and then gently stir, starting from the center and working your way out, until the chocolate is completely melted and the ganache is smooth.",
      "Press a piece of plastic wrap directly onto the surface of the ganache to prevent a skin from forming.",
      "Refrigerate for 1-2 hours, or until the ganache is firm enough to scoop.",
      "Use a small cookie scoop or a spoon to portion the ganache. Roll quickly between your hands to form 1-inch balls.",
      "Roll the truffles in your desired coating (e.g., cocoa powder, chopped nuts, or sprinkles).",
      "Store in an airtight container in the refrigerator."
    ]
  },
  {
    "title": "Classic Buckeye Balls",
    "description": "A beloved no-bake candy from Ohio, these are creamy peanut butter balls partially dipped in chocolate, resembling the nut of the buckeye tree.",
    "ingredients": [
      "1 1/2 cups creamy peanut butter",
      "1 cup (2 sticks) butter, softened",
      "1/2 teaspoon vanilla extract",
      "4 cups sifted confectioners' sugar",
      "4 cups (24 oz) semisweet chocolate chips"
    ],
    "instructions": [
      "Line several baking sheets with wax paper.",
      "In a large bowl, beat the peanut butter, softened butter, and vanilla with an electric mixer until light and fluffy.",
      "On low speed, gradually beat in the sifted confectioners' sugar until the dough is stiff and can be handled. You may need to use your hands to fully incorporate it.",
      "Roll the dough into 1-inch balls and place them on the wax paper-lined baking sheets.",
      "Insert a toothpick into the top of each ball.",
      "Chill in the freezer until firm, about 30 minutes.",
      "In a double boiler or a microwave-safe bowl (melting in 30-second intervals), melt the chocolate chips until smooth.",
      "Holding a frozen peanut butter ball by the toothpick, dip it into the melted chocolate, leaving a small circle of peanut butter showing at the top.",
      "Let the excess chocolate drip off, then return the buckeye to the wax paper-lined sheet.",
      "Carefully remove the toothpick. You can smooth over the small hole with a clean finger.",
      "Refrigerate the buckeyes until the chocolate is set.",
      "Store in an airtight container in the refrigerator."
    ]
  },
  {
    "title": "Saltine Toffee (Christmas Crack)",
    "description": "An incredibly addictive and easy-to-make candy made from saltine crackers, a homemade toffee, and a layer of chocolate.",
    "ingredients": [
      "40-50 saltine crackers (1 sleeve)",
      "2 sticks (1 cup) unsalted butter",
      "1 cup dark brown sugar, packed",
      "12 ounces (2 cups) semisweet chocolate chips",
      "1/2 cup sliced almonds or festive sprinkles (optional)"
    ],
    "instructions": [
      "Preheat oven to 350°F (175°C). Line a 10x15-inch jelly roll pan with aluminum foil, making sure the foil goes up the sides. Spray the foil with non-stick spray.",
      "Arrange the saltine crackers in a single layer on the foil, side-by-side, to cover the entire pan.",
      "In a small saucepan, melt the butter and brown sugar together over medium heat. Bring to a boil and boil for 3 minutes, stirring constantly.",
      "Immediately pour the hot toffee mixture evenly over the saltine crackers, spreading it to cover them all.",
      "Bake for 8-10 minutes, or until the toffee is bubbling all over.",
      "Remove the pan from the oven and immediately scatter the chocolate chips evenly over the hot toffee.",
      "Let the pan sit for 5 minutes. The residual heat will melt the chocolate chips.",
      "Use an offset spatula to spread the melted chocolate into a smooth, even layer.",
      "Sprinkle with almonds or sprinkles, if using.",
      "Let cool completely at room temperature, or chill in the refrigerator for at least 2 hours to speed up the process.",
      "Once completely set and firm, break the toffee into irregular pieces."
    ]
  },
  {
    "title": "Traditional Christmas Pudding",
    "description": "A classic, dense, and sticky steamed sponge cake made with dried fruit, candied peel, and spices. Often served with brandy butter or custard.",
    "ingredients": [
      "1/3 cup brown sugar",
      "1/2 cup (1 stick) butter, softened",
      "1 cup milk",
      "12 dates, pitted and chopped",
      "1/2 cup raisins",
      "1/4 cup dried currants",
      "1/4 cup candied mixed fruit peel, chopped",
      "1 orange, zested",
      "1 teaspoon baking soda",
      "1 cup self-rising flour",
      "2 teaspoons ground cinnamon",
      "1/2 tsp salt"
    ],
    "instructions": [
      "Liberally grease a 1.5-liter (or 6-cup) pudding mold or heatproof glass bowl.",
      "In a large saucepan, combine the brown sugar, butter, milk, dates, raisins, currants, mixed fruit peel, and orange zest.",
      "Bring the mixture to a boil over medium heat, stirring occasionally.",
      "Remove from the heat and immediately stir in the baking soda (the mixture will foam).",
      "Sift in the self-rising flour, cinnamon, and salt. Gently mix until just blended. Do not overmix.",
      "Pour the mixture into the prepared pudding mold. Cover the top tightly with a lid, or with two layers of greased wax paper (or parchment) and one layer of aluminum foil, securing it with string.",
      "Place the mold in a large pot with a steamer rack or an inverted saucer at the bottom. Add boiling water to the pot to come halfway up the sides of the mold.",
      "Cover the large pot, bring to a simmer, and steam for 2 hours. Check the water level periodically and top off with more boiling water as needed.",
      "Remove the pudding from the steamer and let it cool in the mold before turning it out.",
      "To serve, re-steam for 1 hour or microwave until hot. Serve with custard, brandy butter, or cream."
    ]
  },
  {
    "title": "No-Bake Biscoff Peanut Balls",
    "description": "A simple 4-ingredient no-bake treat. Crushed Biscoff cookies and roasted peanuts are bound with condensed milk and coated in white chocolate.",
    "ingredients": [
      "250g (8.8 oz) Lotus Biscoff biscuits",
      "1 cup (130g) roasted peanuts",
      "1 1/4 cup (400g) sweetened condensed milk",
      "200g (7 oz) white chocolate"
    ],
    "instructions": [
      "Place the Biscoff biscuits in a food processor and pulse until they form fine crumbs. Transfer to a large bowl.",
      "Place the roasted peanuts in the food processor and pulse until finely chopped (but not a powder). Add to the bowl with the cookie crumbs.",
      "Pour in the sweetened condensed milk and mix with a spatula or your hands until the mixture is well combined and sticky.",
      "Roll the mixture into small, 1-inch balls and place them on a baking sheet lined with parchment paper.",
      "Chill the balls in the refrigerator for at least 30 minutes, or until firm.",
      "Melt the white chocolate in a microwave-safe bowl in 30-second intervals, stirring in between, until smooth.",
      "Drop each chilled ball into the melted white chocolate, using two forks to lift it out and let the excess chocolate drip off.",
      "Return the coated balls to the parchment-lined baking sheet.",
      "Refrigerate until the white chocolate is completely set.",
      "Store in an airtight container in the refrigerator."
    ]
  }
];
