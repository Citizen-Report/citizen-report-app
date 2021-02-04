const {Builder, By, Select, Key, until} = require('selenium-webdriver');

async function example() {
  const driver = await new Builder().forBrowser('safari').build();
  try {
    await driver.get('http://localhost:3000');
    await driver.findElement(
      By.linkText('Create Complaint')).click();
    await driver.sleep(1000);
    await driver.wait(until.urlIs('http://localhost:3000/createComplaint'), 10000);
    await driver.findElement(By.id('formEmail')).sendKeys('VinceLovesWeed@Gmail.com');
    await driver.findElement(By.id('formAddress')).sendKeys('San Diego');
    await driver.findElement(By.id('formZipcode')).sendKeys('92123');
    await driver.findElement(By.css('#formCategory>option:nth-child(3)')).click();
    // await driver.findElement(By.id('formCategory')).sendKeys('Water');
    await driver.sleep(1000);
    await driver.findElement(By.id('formDescription')).sendKeys('Too many potholes in Mira Mesa Blvd');
    await driver.sleep(3000);
    // await driver.findElement(By.name('q'));.sendKeys('webdriver', Key.RETURN);
  } finally {
    await driver.quit();
  }
}
example();
