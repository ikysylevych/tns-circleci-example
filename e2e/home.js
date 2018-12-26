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
const chai_1 = require("chai");
const title = "My App";
class Home {
    constructor(_driver) {
        this._driver = _driver;
        this.loaded = () => __awaiter(this, void 0, void 0, function* () {
            const lblTitle = yield this._driver.findElementByText(title);
            chai_1.assert.isTrue(yield lblTitle.isDisplayed());
            console.log(title + " loaded!");
        });
        this.findPlayer = (playerName, scrollDirection = 0 /* down */, searchOptions = nativescript_dev_appium_1.SearchOptions.contains) => __awaiter(this, void 0, void 0, function* () {
            const player = yield (yield this.players).scrollTo(scrollDirection, () => this._driver.findElementByText(playerName, searchOptions));
            return player;
        });
        this.tapOnPlayer = (playerName) => __awaiter(this, void 0, void 0, function* () {
            const player = yield this.findPlayer(playerName);
            yield player.tap();
        });
    }
    get players() {
        return this._driver.findElementByClassName(this._driver.locators.listView);
    }
}
exports.Home = Home;
//# sourceMappingURL=home.js.map