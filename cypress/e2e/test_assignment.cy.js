
describe('Test HOW 3', () => {
    it('Goto the News page of HOW 3 and open any one article', () => {
       cy.visit("https://how3-web-next-git-feature-apple-news-ui-how3.vercel.app/news", { failOnStatusCode: false });

       // Open the Bitcoin article and verify the heading of the article page
       cy.xpath("(//div[@class='order-2 md:order-2 flex h-full w-full flex-col items-start justify-center gap-2 rounded-2xl md:bg-neutral-100 md:dark:bg-[#040404 p-3 text-lg lg:text-3xl'])[1]").click()
       cy.xpath("//h1[@class='font-dmseriftext absolute bottom-0 m-0 line-clamp-3 w-full rounded-b-2xl bg-gradient-to-b from-transparent via-[#141414]/70 to-[#161616] px-5 py-8 text-xl text-white dark:text-white md:line-clamp-2 md:rounded-none md:text-2xl lg:text-3xl xl:text-4xl']").should('contain','Is Bitcoin Honeymoon Over?')
   });

   it('Goto the News page of HOW 3 and open See all section', () => {
    cy.visit("https://how3-web-next-git-feature-apple-news-ui-how3.vercel.app/news", { failOnStatusCode: false });

    // Open the see all section and verify the heading of the page
    cy.xpath("(//a[@href='/news/latest-stories'])[1]").click()
    cy.xpath("//h1[@class='text-2xl font-bold md:text-3xl']").should('contain', 'More Stories')
});

it('Goto the HOW 3 and open the Event page and select the web3', () => {
    cy.visit("https://how3-web-next-git-feature-apple-news-ui-how3.vercel.app/news", { failOnStatusCode: false });

    // click on the user profile icon and goto the Event page
    cy.xpath("//div[@class='w-full h-full bg-neon-500 text-midnight-500 flex items-center justify-center']").click()
    cy.xpath("(//a[@class='text-midnight-500 link-underline link-underline-black text-xl md:text-3xl'])[3]").click()
    cy.xpath("//div[@class='rounded-xl aspect-video bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400']").click()
   //asserting the web3 filter to verify the correct filter is applied
    cy.xpath("//div[@class='flex items-center gap-1 opacity-70']").should('contain','web3')

});

it('Goto the HOW 3 and open the Event page and select the Mumbai city event', () => {
    cy.visit("https://how3-web-next-git-feature-apple-news-ui-how3.vercel.app/news", { failOnStatusCode: false });

    // click on the user profile icon and goto the Event page
    cy.xpath("//div[@class='w-full h-full bg-neon-500 text-midnight-500 flex items-center justify-center']").click()
    cy.xpath("(//a[@class='text-midnight-500 link-underline link-underline-black text-xl md:text-3xl'])[3]").click()
    cy.xpath("//img[@alt='Mumbai']").click()
   //asserting the web3 filter to verify the correct filter is applied
    cy.xpath("(//h1[@class='col-span-2 text-xl font-semibold text-midnight-500 dark:text-white line-clamp-2 self-center'])[1]").should('contain','AI Wonderland - Where Robots Dream').click()
    //assert the name of the event
    cy.xpath("//h1[@class='text-midnight-500 text-lg font-bold dark:text-white md:py-5 lg:text-2xl xl:text-3xl']").should('contain','AI Wonderland - Where Robots Dream')

});

it('Goto the HOW 3 and open the Learn page', () => {
    cy.visit("https://how3-web-next-git-feature-apple-news-ui-how3.vercel.app/news", { failOnStatusCode: false });

    // click on the user profile icon and goto the learn page
    cy.xpath("//div[@class='w-full h-full bg-neon-500 text-midnight-500 flex items-center justify-center']").click()
    cy.xpath("(//a[@class='text-midnight-500 link-underline link-underline-black text-xl md:text-3xl'])[4]").click()
    //assert the learn page heading
    cy.xpath("//h1[@class='text-[#797979]']").should('contain','Here is everything you need to')

});


})