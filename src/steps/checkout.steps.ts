import { Given, Then, When } from "../fixtures/fixtures";
import { generateRandomCreditCard } from "../fixtures/randomizer";


When('je procède à la commande', async ({homePage, cartPage, checkoutPage, paymentPage}) => {
    await homePage.clickOnCartBtn();
    await cartPage.clickOnProceedToCheckout();
    await checkoutPage.verifyTotalCartPrice();
    await checkoutPage.fillCommentary();
    await checkoutPage.clickOnPlaceOrderBtn();
    await generateRandomCreditCard();
    await paymentPage.fillCreditCardForm();
    await paymentPage.clickOnPayAndConfirmOrder();
  });


Then('ma commande est réalisée', async ({paymentPage, homePage}) => {
  await paymentPage.verifyMessageOrderPlaced();
  await paymentPage.clickOnContinueBtn();
  await homePage.verifyPresenceOnHomepage();
  });

When('je clique sur le bouton Download Invoice', async ({paymentPage, commonPage}) => {
  await paymentPage.clickOnDownloadInvoiceOrder();
});

// 3. Missing step definition for "src\features\TS07_order.feature:29:5"
Then('le fichier se télécharge et correpond à l\'attendu', async ({paymentPage}) => {
  await paymentPage.verifyFileDownloaded();
});