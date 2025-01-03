import { faker } from '@faker-js/faker/locale/fr';
import type { BrowserContext, Page } from '@playwright/test'
import { expect, Locator } from '@playwright/test';
import { PathOrFileDescriptor, readFileSync, writeFileSync } from 'node:fs';

export class CommonPage {
    readonly page: Page;
    readonly locator:Locator;
    readonly context:BrowserContext;
    readonly footer_locator:Locator;
    readonly header_locator: Locator;
    readonly scrollUpArrow_btn: Locator;

    constructor(page:Page, context:BrowserContext) {
        this.page = page;
        this.context = context;
        this.footer_locator = page.locator(`//footer`);
        this.header_locator = page.locator(`//header`);
        this.scrollUpArrow_btn = page.locator(`//a[@id="scrollUp"]`)
    }

    async navigateToUrl(url:string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded"
        });
        await this.closeAboutBlankTab();
        await this.dialogAccept();
    }

    async closeAboutBlankTab() {
        const tabOpens =  this.context.pages();
        for(const tab of tabOpens) {
            if (tab.url() === 'about:blank') {
                await tab.close();
            }
        }
    }

    async waitForDomContentLoaded() {
    await this.page.waitForLoadState("domcontentloaded");
    }

    async acceptCookies(): Promise<void> {
    //  Gestion des cookies (en fonction de la langue)
        const cookies_FR = await this.page.locator("//p[@class='fc-button-label' and contains(.,'Autoriser')]").isVisible();
        if(cookies_FR) {
            await this.page.getByLabel("Autoriser").click();
            await this.page.locator("//p[@class='fc-button-label' and contains(.,'Autoriser')]").click();
        } else {
         
            await this.page.locator("//p[@class='fc-button-label' and contains(.,'Consent')]").click();
        }
    }

    async deleteElement(element:Locator) { 
    const elementToDelete = element;
        await elementToDelete.evaluate((element) => {
            element.remove();
    });
        await expect(element).not.toBeVisible();
    }

// creation d'un fichier .txt avec 100 lignes
    async createRandomTxtFile() {
        const randomTxt = faker.lorem.lines(100);
        const createdFilePath = `src/data/randomFile.txt`;
        writeFileSync(createdFilePath,randomTxt);
    };

// gestion des pop-up chromium
    async dialogAccept() {

        this.page.on('dialog', async dialog => {
            if (dialog.type() === 'confirm')
            dialog.accept();
        })
    }

    async waitForTiming(duration:number){
        await this.page.waitForTimeout(duration);
    } 

    async getText(locator:Locator) {
        const actualMessage = await locator.textContent();
        return actualMessage
    }

    async verifyTextIsCorrect(locator:Locator, expectedMessage:string) {
        await expect.soft(locator).toHaveText(expectedMessage); 
    }

    async verifyUrl(url:string) {
        await expect.soft(this.page).toHaveURL(url);
    }

    async verifyTextContain(locator:Locator, expectedText:string) {
        await expect.soft(locator).toContainText(expectedText);
    }

    async verifyTextElements(locator:Locator, expectedTexts:string[]) {
        await expect.soft(locator).toHaveText(expectedTexts);
    }

    async hoverOnElement(locator:Locator) {
        await locator.dispatchEvent("mouseover");
    }

    async elementIsVisible(locator:Locator) {
        await expect(locator).toBeVisible();
    }

    async elementIsNotVisible(locator:Locator) {
        await expect(locator).not.toBeVisible();
    }

    async expectElementToHaveAttribute(locator:Locator, AttributeName:string, AttributeValue:string) {
        await expect(locator).toHaveAttribute(AttributeName,AttributeValue);
    }

    async verifyActivePage(locator:Locator) {
        await expect(locator).toHaveAttribute('style','color: orange;');
    }

    async writeInFile(filePath:PathOrFileDescriptor, data:string) {
        writeFileSync(filePath, data);
    }

    async expectElementToEqual(actualNumber:number, expectedNumber:number) {
        expect(actualNumber).toEqual(expectedNumber);
    }

    async getPageTitle() {
        const pageTitle = await this.page.title();
        return pageTitle;
    }

    async pauseTest() {
        await this.page.pause();
    }

    async getContextCookies() {
        const cookies = JSON.stringify(await this.context.cookies());
        return cookies
        }

    async verifyDownloadFilePresence() {
        const contentFile = readFileSync(`C:/Users/Dorian Misser/Documents/Workspace/Playwright_Optimization/src/data`);
    }

    async scrollManuallyToPageFooter() {
        await this.footer_locator.scrollIntoViewIfNeeded();
    }

    async scrollManuallyToPageHeader() {
        await this.header_locator.scrollIntoViewIfNeeded();
    }
    
    async clickOnScrollUpArrow() {
        await this.scrollUpArrow_btn.click();
    }
}