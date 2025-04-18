import { faker } from '@faker-js/faker/locale/en_US'
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

export async function createRandomUser() {
    const user = {
    title : function() {
        const randomSex = faker.person.sex();
        if (randomSex === "male") {
            const title = "Mr."
            return title
        }
        else if (randomSex === "female") {
            const title = "Mrs."
            return title
        }
        else {
            throw new Error (`Le genre renvoyé ${randomSex} n'est pas présent dans les options`)
        }
    },
    firstName : faker.person.firstName(),
    lastName : faker.person.lastName(),
    name : function createName() {
        const name = `${this.firstName}_${this.lastName}`;
        return name;
    },
    password : faker.internet.password(),
    email : function() {
        const email = `${this.firstName}.${this.lastName}@yopmail.com`;
        return email;
    },
    dayOfBirth : (await (generateRandomBirthDate(18,70))).day,
    monthOfBirth : (await (generateRandomBirthDate(18, 70))).month,
    yearOfBirth : (await (generateRandomBirthDate(18, 70))).year,
    company : faker.company.name(),
    address1 : faker.location.streetAddress(),
    address2 : faker.location.buildingNumber(),
    country : "United States",
    state : faker.location.state(),
    city : faker.location.city(),
    zipCode : faker.location.zipCode(),
    mobileNumber : faker.phone.number({style:'human'}),
};
writeFileSync(path.resolve(`src/data/randomUser.json`),
    `{
    "title" : "${user.title()}",
    "firstName" : "${user.firstName}",
    "lastName" : "${user.lastName}",
    "name" : "${user.name()}",
    "password" : "${user.password}",
    "email" : "${user.email()}",
    "dayOfBirth" : "${user.dayOfBirth}",
    "monthOfBirth" : "${user.monthOfBirth}",
    "yearOfBirth" : "${user.yearOfBirth}",
    "company" : "${user.company}",
    "address1" : "${user.address1}",
    "address2" : "${user.address2}",
    "country" : "${user.country}",
    "state" : "${user.state}",
    "city" : "${user.city}",
    "zipCode" : "${user.zipCode}",
    "mobileNumber" : "${user.mobileNumber}"
    }`);
    const pathToFile = `C:/Users/Dorian Misser/Documents/Workspace/Playwright_Optimization/src/data/randomUser.json`
    const randomUser = JSON.parse(readFileSync(pathToFile, 'utf-8'));
    return randomUser
};

export async function returnFileContent(fileName: any) {
    const pathToFile = `C:/Users/Dorian Misser/Documents/Workspace/Playwright_Optimization/src/data/${fileName}`;
    const fileData = await JSON.parse(readFileSync(pathToFile, 'utf-8'));
    return fileData;
  }

export async function generateRandomBirthDate(minAge: number, maxAge: number) {
    const currentDate = new Date();
    
    // Calculer les dates limites
    const maxDate = new Date(currentDate.getFullYear() - minAge, currentDate.getMonth(), currentDate.getDate());
    const minDate = new Date(currentDate.getFullYear() - maxAge,currentDate.getMonth(),currentDate.getDate());
    // Générer une date aléatoire entre les deux limites
    const randomTime = minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime());
    const randomDate = new Date(randomTime);
    // Formater la date au format "YYYY-MM-DD"
    const year = randomDate.getFullYear().toString();
    const month = (randomDate.getMonth() + 1).toString();
    const day = randomDate.getDate().toString();  
    return { year, month, day };
  }

export async function generateRandomCreditCard() {
    const creditCardUser = await returnFileContent(`existingUser.json`);
    const creditCard = {
        nameOnCard : `${creditCardUser.lastName}`,
        cardNumber : faker.finance.creditCardNumber(),
        cvcNumber : faker.finance.creditCardCVV(),
        expirationMonth : faker.date.month(),
        expirationYear : faker.date.future().getFullYear().toString()
    };
    writeFileSync(path.resolve(`src/data/randomCreditCard.json`), JSON.stringify(creditCard, null, 2));
};
