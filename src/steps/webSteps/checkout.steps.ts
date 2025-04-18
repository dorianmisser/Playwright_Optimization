import { Given, Then, When } from "../../fixtures/web.fixtures";
import { generateRandomCreditCard } from "../../fixtures/randomizer";

When('je procède à la commande', async ({cartPage, checkoutPage, paymentPage}) => {
    await cartPage.verifyPresenceOnCartPage();
    await cartPage.clickOnProceedToCheckout();
    await checkoutPage.verifyTotalCartPrice();
    await checkoutPage.fillCommentary();
    await checkoutPage.clickOnPlaceOrderBtn();
    await generateRandomCreditCard();
    await paymentPage.fillCreditCardForm('randomCreditCard');
    await paymentPage.clickOnPayAndConfirmOrder();
  });

Then('ma commande est réalisée', async ({paymentPage, homePage}) => {
  await paymentPage.verifyMessageOrderPlaced();
  await paymentPage.clickOnContinueBtn();
  await homePage.verifyPresenceOnHomepage();
  });

When('je clique sur le bouton Download Invoice', async ({ paymentPage }) => {
  await paymentPage.clickOnDownloadInvoiceOrder();
});

Then('le fichier se télécharge et correpond à l\'attendu', async ({paymentPage}) => {
  await paymentPage.verifyFileDownloaded('randomUser');
});