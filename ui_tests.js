import { ClientFunction, Selector } from 'testcafe';

// description of test suite and origin URL for test cases
fixture  `Upside: Website UI Test Suite`
  .page `https://www.upside.com`;

// special functions, URL vars, and selectors
const getPageUrl = ClientFunction(() => window.location.href);

const HOME_URL = 'https://www.upside.com';
const HOW_IT_WORKS_URL = 'https://upside.com/how-it-works';
const TRAVEL_URL = 'https://upside.com/travel';
const FLIGHT_URL = 'https://upside.com/travel/game/flight';

const howUpsideWorksLink = '#__next > div > footer > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(2) > a'
const youGetChoicesHeader = '#get-choices > div.jss56.jss64 > h3';
const youGetChoicesParagraph = '#get-choices > div.jss56.jss64 > p';
const bookNowButton = '#get-choices > div.jss56.jss64 > a';

const flightOriginTextInput = '#app > div > div._1v2yujs > section > div > div._r96i4b > div > div._tr7jdt > div._1w79ro2 > div > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)';
const flightDestinationTextInput = '#app > div > div._1v2yujs > section > div > div._r96i4b > div > div._tr7jdt > div._1w79ro2 > div > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)';
const getStartedButton = '#app > div > div._1v2yujs > section > div > div._r96i4b > div > div._tr7jdt > div._1w79ro2 > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > button';

// test cases
test('1. User can navigate to upside.com/', async t => {
  await t
    .expect(getPageUrl()).contains(HOME_URL); 
});

test('2. User can navigate to upside.com/how-it-works via "How Upside Works" link', async t => {
  await t
    .click(howUpsideWorksLink)
    .expect(getPageUrl()).contains(HOW_IT_WORKS_URL);
});

test('3. "You get choices" section appears on "How it works" page', async t => {
  await t
    .click(howUpsideWorksLink)
    .expect(Selector(youGetChoicesHeader).exists).ok()
    .expect(Selector(youGetChoicesHeader).innerText).contains('You get choices')
});

test('4. "You get choices" section has text appearing', async t => {
  await t
    .click(howUpsideWorksLink)
    .expect(Selector(youGetChoicesParagraph).exists).ok()
    .expect(Selector(youGetChoicesParagraph).innerText.length > 0);
});

test('5. User can click "Book Now" and it takes them to upside.com/travel web form', async t => {
  await t
    .click(howUpsideWorksLink)
    .click(bookNowButton)
    .expect(getPageUrl()).contains(TRAVEL_URL);
});

test('6. upside.com/travel web form has text inputs for origin and destination of flight', async t => {
  await t
    .click(howUpsideWorksLink)
    .click(bookNowButton)
    .expect(Selector(flightOriginTextInput).exists).ok()
    .expect(Selector(flightDestinationTextInput).exists).ok()
});

test('7. User can fill out upside.com/travel web form and click "Get Started"', async t => {
  await t
    .click(howUpsideWorksLink)
    .click(bookNowButton)
    .typeText(flightOriginTextInput, 'Washington').pressKey('tab')
    .typeText(flightDestinationTextInput, 'San Fran').pressKey('tab')
    .click(getStartedButton)
    .expect(getPageUrl()).contains(FLIGHT_URL);
});
