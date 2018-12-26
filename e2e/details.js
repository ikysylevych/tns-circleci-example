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
const image_options_1 = require("nativescript-dev-appium/lib/image-options");
const chai_1 = require("chai");
const title = "Details";
class Details {
    constructor(_driver) {
        this._driver = _driver;
        this.loaded = () => __awaiter(this, void 0, void 0, function* () {
            const lblTitle = yield this._driver.findElementByText(title);
            chai_1.assert.isTrue(yield lblTitle.isDisplayed());
            console.log(title + " loaded!");
        });
        this.assertPlayerIsDisplayed = (playerName) => __awaiter(this, void 0, void 0, function* () {
            const player = yield this._driver.findElementByText(playerName);
            chai_1.assert.isTrue(yield player.isDisplayed(), `${playerName} is NOT displayed!`);
        });
        this.assertPlayerScreen = (playerName) => __awaiter(this, void 0, void 0, function* () {
            const imageName = playerName.toLowerCase() + "PlayerDetails";
            const areDetailsCorrect = yield this._driver.compareScreen(imageName, 3, 10, image_options_1.ImageOptions.pixel);
            chai_1.assert.isTrue(areDetailsCorrect, `Image does NOT match! Please, refer to ${imageName} image.`);
        });
    }
}
exports.Details = Details;
//# sourceMappingURL=details.js.map