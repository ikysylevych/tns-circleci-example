"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nativescript_dev_appium_1 = require("nativescript-dev-appium");
const home_1 = require("./home");
const details_1 = require("./details");
const players_1 = require("./players");
describe("template-hello-world-ng scenario", () => {
    let driver, details, home;
    before(() => __awaiter(this, void 0, void 0, function* () {
        driver = yield nativescript_dev_appium_1.createDriver();
        details = new details_1.Details(driver);
        home = new home_1.Home(driver);
    }));
    afterEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.currentTest.state === "failed") {
                yield driver.logPageSource(this.currentTest.title);
                yield driver.logScreenshot(this.currentTest.title);
            }
            yield driver.navBack();
        });
    });
    after(() => __awaiter(this, void 0, void 0, function* () {
        yield driver.quit();
    }));
    it("should swipe to the last player and verify his details", () => __awaiter(this, void 0, void 0, function* () {
        yield home.loaded();
        yield home.tapOnPlayer(players_1.Players.masip);
        yield details.loaded();
        yield details.assertPlayerIsDisplayed(players_1.Players.masip);
        yield details.assertPlayerScreen(players_1.Players.masip);
    }));
});
//# sourceMappingURL=test.e2e.js.map