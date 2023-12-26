import { useEffect, useState } from "react";
import { ProductCard } from "../../StyledComponants/ProductCard";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import "./MainBody.css";
import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

const sephoraData = [
   
  {
      "brandName": "IT Cosmetics",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "IT Cosmetics - Bye Bye Dark Spots Concealer + Serum with Niacinamide & Hyaluronic Acid",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isSephoraExclusive": false,
          "listPrice": "$30.00",
          "skuId": "2643740",
          "skuType": "Standard"
      },
      "displayName": "Bye Bye Dark Spots Concealer + Serum with Niacinamide & Hyaluronic Acid",
      "heroImage": "https://sephora.com/productimages/sku/s2643740-main-zoom.jpg?imwidth=270",
      "moreColors": 18,
      "productId": "P504805",
      "rating": "4.4619",
      "reviews": "485",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/it-cosmetics-bye-bye-dark-spots-concealer-P504805",
      "impression_id": "b845ee1b-2b94-472d-b7cd-fa15e6cc02c6",
      "impression_tracker": "https://sephora.ms.tagdelivery.com/impression?id=b845ee1b-2b94-472d-b7cd-fa15e6cc02c6&x=WinRVPL2AeC2qKg6d4p1xF6ftUnsgxxItSePLczAlrhYhdoToyO_trWY9z-Ut7BtdyTRgSDkGLnn5NSzl8_yuMJC2XBRDXOsRAs-KkBqHN-tKHOwgryPzNWY2gpLM0V5vbiEdlCcTIgXwIebSqmt5nO2E2GABpn97lfPlGxS6Y8NAoe0om3vfcunsm3PBom7ylLlfy7cc-WYDgft5ba_B1Ct4VRMSYQLwQ-fKh1BSg9nA4gmBf5OEkbDcd3YLaFVXb28KKu9yNscb1ArptBWsXHzDhOhVPr6PAaFF3mA5wGqbDoie36GNfMGxux6ED5tzPyOpHpwQ3NQbRwOH7-zt2gW-SjRSCI5p3HEvEXUSKlJTKDOsljLgSjbVhFCNLdWY6P9xYPXEnWBsZq-Eve7h8svVYglLdK2Tf1qhB-8ec8rWotLMoEA2a8YDy2OyLXZ3O4DteYn-eCHm_rfvX4Kwr6-44KX_ax4F79-mZc8drcRPBNT9vMjIPfxGCnYG4tasxVPSN-w0S8_KLsbY40lYsZOmLkq0sjRUg5GzTWuCAjlA4xoeQfyzOfX_yGikoMC",
      "sponsored": true,
      "impression_payload": "WinRVPL2AeC2qKg6d4p1xF6ftUnsgxxItSePLczAlrhYhdoToyO_trWY9z-Ut7BtdyTRgSDkGLnn5NSzl8_yuMJC2XBRDXOsRAs-KkBqHN-tKHOwgryPzNWY2gpLM0V5vbiEdlCcTIgXwIebSqmt5nO2E2GABpn97lfPlGxS6Y8NAoe0om3vfcunsm3PBom7ylLlfy7cc-WYDgft5ba_B1Ct4VRMSYQLwQ-fKh1BSg9nA4gmBf5OEkbDcd3YLaFVXb28KKu9yNscb1ArptBWsXHzDhOhVPr6PAaFF3mA5wGqbDoie36GNfMGxux6ED5tzPyOpHpwQ3NQbRwOH7-zt2gW-SjRSCI5p3HEvEXUSKlJTKDOsljLgSjbVhFCNLdWY6P9xYPXEnWBsZq-Eve7h8svVYglLdK2Tf1qhB-8ec8rWotLMoEA2a8YDy2OyLXZ3O4DteYn-eCHm_rfvX4Kwr6-44KX_ax4F79-mZc8drcRPBNT9vMjIPfxGCnYG4tasxVPSN-w0S8_KLsbY40lYsZOmLkq0sjRUg5GzTWuCAjlA4xoeQfyzOfX_yGikoMC",
      "click_tracker": "https://sephora.ms.tagdelivery.com/click?id=b845ee1b-2b94-472d-b7cd-fa15e6cc02c6&x=WinRVPL2AeC2qKg6d4p1xF6ftUnsgxxItSePLczAlrhYhdoToyO_trWY9z-Ut7BtdyTRgSDkGLnn5NSzl8_yuMJC2XBRDXOsRAs-KkBqHN-tKHOwgryPzNWY2gpLM0V5vbiEdlCcTIgXwIebSqmt5nO2E2GABpn97lfPlGxS6Y8NAoe0om3vfcunsm3PBom7ylLlfy7cc-WYDgft5ba_B1Ct4VRMSYQLwQ-fKh1BSg9nA4gmBf5OEkbDcd3YLaFVXb28KKu9yNscb1ArptBWsXHzDhOhVPr6PAaFF3mA5wGqbDoie36GNfMGxux6ED5tzPyOpHpwQ3NQbRwOH7-zt2gW-SjRSCI5p3HEvEXUSKlJTKDOsljLgSjbVhFCNLdWY6P9xYPXEnWBsZq-Eve7h8svVYglLdK2Tf1qhB-8ec8rWotLMoEA2a8YDy2OyLXZ3O4DteYn-eCHm_rfvX4Kwr6-44KX_ax4F79-mZc8drcRPBNT9vMjIPfxGCnYG4tasxVPSN-w0S8_KLsbY40lYsZOmLkq0sjRUg5GzTWuCAjlA4xoeQfyzOfX_yGikoMC&redirect="
  },
  {
      "brandName": "SEPHORA COLLECTION",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "SEPHORA COLLECTION - Color Shifter Mini Eyeshadow Palette",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": true,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$10.00",
          "salePrice": "$6.00",
          "skuId": "2606614",
          "skuType": "Standard"
      },
      "displayName": "Color Shifter Mini Eyeshadow Palette",
      "heroImage": "https://www.sephora.com/productimages/sku/s2606614-main-zoom.jpg?imwidth=270&pb=2023-03-sephora-value-2023",
      "altImage": "https://www.sephora.com/productimages/sku/s2606614-av-2-zoom.jpg?imwidth=270",
      "moreColors": 2,
      "onSaleData": "FULL",
      "productId": "P503921",
      "rating": "3.9605",
      "reviews": "76",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/sephora-collection-sc-color-shifter-mini-eyeshadow-palette-P503921?skuId=2606614",
      "sponsored": false
  },
  {
      "brandName": "Rare Beauty by Selena Gomez",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Rare Beauty by Selena Gomez - Mini Soft Pinch Liquid Blush",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": true,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$14.00",
          "skuId": "2712867",
          "skuType": "Standard"
      },
      "displayName": "Mini Soft Pinch Liquid Blush",
      "heroImage": "https://www.sephora.com/productimages/sku/s2712867-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2712867-av-2-zoom.jpg?imwidth=270",
      "moreColors": 0,
      "onSaleData": "NONE",
      "productId": "P508264",
      "rating": "4.4545",
      "reviews": "55",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/mini-soft-pinch-liquid-blush-P508264?skuId=2712867",
      "sponsored": false
  },
  {
      "brandName": "Grande Cosmetics",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Grande Cosmetics - Lash and Brow Serum Fantasy Set",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": true,
          "isLimitedTimeOffer": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isSephoraExclusive": false,
          "listPrice": "$69.00",
          "skuId": "2716504",
          "skuType": "Standard"
      },
      "displayName": "Lash and Brow Serum Fantasy Set",
      "heroImage": "https://sephora.com/productimages/sku/s2716504-main-zoom.jpg?imwidth=270",
      "productId": "P507103",
      "rating": "4.623",
      "reviews": "61",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/lash-brow-serum-fantasy-set-P507103",
      "impression_id": "5e7ccc02-d626-4535-a507-164b4b3dd516",
      "impression_tracker": "https://sephora.ms.tagdelivery.com/impression?id=5e7ccc02-d626-4535-a507-164b4b3dd516&x=6B5ezABgUrFjPJUwpacP3jN6eZmNI-iiFhpnaP9671epbJv2mTsIyo0PvRok95opk_uQQLla5cl1uNb6cccWkBqp-tnbZ2QmGvX3aW3gHIN2lBwQSA3A0iaoImXSoWTcRPUPLflU_4A5iC5Dlp7EkJX5tDa2pQG4REikVV87WJo8L3o_YHV0HMLEikdXx8QUlOLUA4uftKKD0h6y8wK4BZIS1HyyCMeMfQ6aKxazPlgV5W2uGDFnOjBTynEve4gAa4hKCqcrYEi9O02KXEJwmKT5_LwtGY2aI7g_dhmwxUo8EdN6sFRkljaZ3v0ur69bkeZsqvPD_UGdsTsDtd40ZJ41K2u7GDrNRwu_rVUK2lWKIUpd1ISmzvvQYBKNvhlonfGq9Wur5yLDCE9xnSPE8S39lB3rOH54PSFCyiclDMTwT77sf9eXDMEWSSaw7JbTLah9xQd_0PQgOBZ4F2lrxp8X8dal-AZbJb152LSoRSK0QfUukIDvXMPoD_qglfbh-TY3SURowxl2yqGqVal_h7u4qg8cIrnZX0V6RgSN5t5_iE2kVAkEq9yVvAnd6oNy",
      "sponsored": true,
      "impression_payload": "6B5ezABgUrFjPJUwpacP3jN6eZmNI-iiFhpnaP9671epbJv2mTsIyo0PvRok95opk_uQQLla5cl1uNb6cccWkBqp-tnbZ2QmGvX3aW3gHIN2lBwQSA3A0iaoImXSoWTcRPUPLflU_4A5iC5Dlp7EkJX5tDa2pQG4REikVV87WJo8L3o_YHV0HMLEikdXx8QUlOLUA4uftKKD0h6y8wK4BZIS1HyyCMeMfQ6aKxazPlgV5W2uGDFnOjBTynEve4gAa4hKCqcrYEi9O02KXEJwmKT5_LwtGY2aI7g_dhmwxUo8EdN6sFRkljaZ3v0ur69bkeZsqvPD_UGdsTsDtd40ZJ41K2u7GDrNRwu_rVUK2lWKIUpd1ISmzvvQYBKNvhlonfGq9Wur5yLDCE9xnSPE8S39lB3rOH54PSFCyiclDMTwT77sf9eXDMEWSSaw7JbTLah9xQd_0PQgOBZ4F2lrxp8X8dal-AZbJb152LSoRSK0QfUukIDvXMPoD_qglfbh-TY3SURowxl2yqGqVal_h7u4qg8cIrnZX0V6RgSN5t5_iE2kVAkEq9yVvAnd6oNy",
      "click_tracker": "https://sephora.ms.tagdelivery.com/click?id=5e7ccc02-d626-4535-a507-164b4b3dd516&x=6B5ezABgUrFjPJUwpacP3jN6eZmNI-iiFhpnaP9671epbJv2mTsIyo0PvRok95opk_uQQLla5cl1uNb6cccWkBqp-tnbZ2QmGvX3aW3gHIN2lBwQSA3A0iaoImXSoWTcRPUPLflU_4A5iC5Dlp7EkJX5tDa2pQG4REikVV87WJo8L3o_YHV0HMLEikdXx8QUlOLUA4uftKKD0h6y8wK4BZIS1HyyCMeMfQ6aKxazPlgV5W2uGDFnOjBTynEve4gAa4hKCqcrYEi9O02KXEJwmKT5_LwtGY2aI7g_dhmwxUo8EdN6sFRkljaZ3v0ur69bkeZsqvPD_UGdsTsDtd40ZJ41K2u7GDrNRwu_rVUK2lWKIUpd1ISmzvvQYBKNvhlonfGq9Wur5yLDCE9xnSPE8S39lB3rOH54PSFCyiclDMTwT77sf9eXDMEWSSaw7JbTLah9xQd_0PQgOBZ4F2lrxp8X8dal-AZbJb152LSoRSK0QfUukIDvXMPoD_qglfbh-TY3SURowxl2yqGqVal_h7u4qg8cIrnZX0V6RgSN5t5_iE2kVAkEq9yVvAnd6oNy&redirect="
  },
  {
      "brandName": "Rare Beauty by Selena Gomez",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Rare Beauty by Selena Gomez - Warm Wishes Effortless Bronzer Sticks",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$26.00",
          "skuId": "2518934",
          "skuType": "Standard"
      },
      "displayName": "Warm Wishes Effortless Bronzer Sticks",
      "heroImage": "https://www.sephora.com/productimages/sku/s2518934-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2518934-av-27-zoom.jpg?imwidth=270",
      "moreColors": 6,
      "onSaleData": "NONE",
      "productId": "P479343",
      "rating": "4.5195",
      "reviews": "2302",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/rare-beauty-by-selena-gomez-warm-wishes-effortless-bronzer-sticks-P479343?skuId=2518934",
      "sponsored": false
  },
  {
      "brandName": "Dior",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Dior - Lip Glow Oil",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$40.00",
          "skuId": "2316248",
          "skuType": "Standard"
      },
      "displayName": "Lip Glow Oil",
      "heroImage": "https://www.sephora.com/productimages/sku/s2316248-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2316248-av-02-zoom.jpg?imwidth=270",
      "moreColors": 7,
      "onSaleData": "NONE",
      "productId": "P453814",
      "rating": "3.9402",
      "reviews": "1822",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/dior-lip-glow-oil-P453814?skuId=2316248",
      "sponsored": false
  },
  {
      "brandName": "La Mer",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "La Mer - The Soft Fluid Long Wear Foundation SPF 20",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNew": false,
          "isOnlineOnly": true,
          "isSephoraExclusive": false,
          "listPrice": "$145.00",
          "skuId": "1999895",
          "skuType": "Standard"
      },
      "displayName": "The Soft Fluid Long Wear Foundation SPF 20",
      "heroImage": "https://sephora.com/productimages/sku/s1999895-main-zoom.jpg?imwidth=270",
      "moreColors": 27,
      "productId": "P423742",
      "rating": "4.0557",
      "reviews": "395",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/the-soft-fluid-long-wear-foundation-spf-20-P423742",
      "impression_id": "173768fa-c917-4ca2-9d5a-697103f9a6ad",
      "impression_tracker": "https://sephora.ms.tagdelivery.com/impression?id=173768fa-c917-4ca2-9d5a-697103f9a6ad&x=MrfGAlMaEmeJvVEYqxlkV84QhFqOLhQAFtbs19Sacn48G3G4VZC2WVytP8uqm8VZW70VW9Fz635BW34nx7_WCFB6ac_I4plkdFwh83tSmyGSxtzNhgH8cW_Ycp3NICY0aYOLmP9XYKtb_EA1nJWdM2WhOr6dy3QT1zHaLyO4nciYDtFJe2Tomrei0dYDZNbrleFuFKwTEXS7sOk3YhdWyVpFTw8NgYjRPv6RS6fqv8A6or1r-5mnfSToWCBpVGLGYEGpUtiXvleaOyKjK-D9AbcgcI_dephp4MLXT1-VWXy80sXPqjVITi85i7dgyOv33x4q7A1QcjaHvTj-cYdOjx-SEByHMlj-7QRT6QbladOAuxks0Y2sy2nSOyW9in5xeDlbZVk2qDL1pU-W2PMlYnxl220HXka9F-6eFJSbBNhjv_lHTNDvRo0A2P9UQNHeYjG4FuuaxoKS0tUo0JTXH-1tzDPauDlKUCpI_N-5QVd0koqoNplsbpvYpdyz9sV1_lWXOpVsTVYFX6O7xkZhTpDNG09eiLvCL6TlsqfaFLa99R5-bGe1XKZ1hTVRVH6S",
      "sponsored": true,
      "impression_payload": "MrfGAlMaEmeJvVEYqxlkV84QhFqOLhQAFtbs19Sacn48G3G4VZC2WVytP8uqm8VZW70VW9Fz635BW34nx7_WCFB6ac_I4plkdFwh83tSmyGSxtzNhgH8cW_Ycp3NICY0aYOLmP9XYKtb_EA1nJWdM2WhOr6dy3QT1zHaLyO4nciYDtFJe2Tomrei0dYDZNbrleFuFKwTEXS7sOk3YhdWyVpFTw8NgYjRPv6RS6fqv8A6or1r-5mnfSToWCBpVGLGYEGpUtiXvleaOyKjK-D9AbcgcI_dephp4MLXT1-VWXy80sXPqjVITi85i7dgyOv33x4q7A1QcjaHvTj-cYdOjx-SEByHMlj-7QRT6QbladOAuxks0Y2sy2nSOyW9in5xeDlbZVk2qDL1pU-W2PMlYnxl220HXka9F-6eFJSbBNhjv_lHTNDvRo0A2P9UQNHeYjG4FuuaxoKS0tUo0JTXH-1tzDPauDlKUCpI_N-5QVd0koqoNplsbpvYpdyz9sV1_lWXOpVsTVYFX6O7xkZhTpDNG09eiLvCL6TlsqfaFLa99R5-bGe1XKZ1hTVRVH6S",
      "click_tracker": "https://sephora.ms.tagdelivery.com/click?id=173768fa-c917-4ca2-9d5a-697103f9a6ad&x=MrfGAlMaEmeJvVEYqxlkV84QhFqOLhQAFtbs19Sacn48G3G4VZC2WVytP8uqm8VZW70VW9Fz635BW34nx7_WCFB6ac_I4plkdFwh83tSmyGSxtzNhgH8cW_Ycp3NICY0aYOLmP9XYKtb_EA1nJWdM2WhOr6dy3QT1zHaLyO4nciYDtFJe2Tomrei0dYDZNbrleFuFKwTEXS7sOk3YhdWyVpFTw8NgYjRPv6RS6fqv8A6or1r-5mnfSToWCBpVGLGYEGpUtiXvleaOyKjK-D9AbcgcI_dephp4MLXT1-VWXy80sXPqjVITi85i7dgyOv33x4q7A1QcjaHvTj-cYdOjx-SEByHMlj-7QRT6QbladOAuxks0Y2sy2nSOyW9in5xeDlbZVk2qDL1pU-W2PMlYnxl220HXka9F-6eFJSbBNhjv_lHTNDvRo0A2P9UQNHeYjG4FuuaxoKS0tUo0JTXH-1tzDPauDlKUCpI_N-5QVd0koqoNplsbpvYpdyz9sV1_lWXOpVsTVYFX6O7xkZhTpDNG09eiLvCL6TlsqfaFLa99R5-bGe1XKZ1hTVRVH6S&redirect="
  },
  {
      "brandName": "ONE/SIZE by Patrick Starrr",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "ONE/SIZE by Patrick Starrr - Mini On 'Til Dawn Mattifying Waterproof Setting Spray",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$17.00",
          "skuId": "2490704",
          "skuType": "Standard"
      },
      "displayName": "Mini On 'Til Dawn Mattifying Waterproof Setting Spray",
      "heroImage": "https://www.sephora.com/productimages/sku/s2490704-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2490704-av-6-zoom.jpg?imwidth=270",
      "onSaleData": "NONE",
      "productId": "P476718",
      "rating": "3.8808",
      "reviews": "1300",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/one-size-by-patrick-starrr-mini-on-til-dawn-setting-spray-P476718?skuId=2490704",
      "sponsored": false
  },
  {
      "brandName": "NARS",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "NARS - Radiant Creamy Concealer",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$15.00 - $32.00",
          "skuId": "2172310",
          "skuType": "Standard"
      },
      "displayName": "Radiant Creamy Concealer",
      "heroImage": "https://www.sephora.com/productimages/sku/s2172310-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2172310-av-21-zoom.jpg?imwidth=270",
      "moreColors": 29,
      "onSaleData": "NONE",
      "productId": "P377873",
      "rating": "4.3234",
      "reviews": "13913",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/radiant-creamy-concealer-P377873?skuId=2172310",
      "sponsored": false
  },
  {
      "brandName": "Saie",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Saie - Glowy Super Gel Lightweight Dewy Multipurpose Illuminator",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$16.00 - $28.00",
          "skuId": "2414035",
          "skuType": "Standard"
      },
      "displayName": "Glowy Super Gel Lightweight Dewy Multipurpose Illuminator",
      "heroImage": "https://www.sephora.com/productimages/sku/s2414035-main-zoom.jpg?imwidth=270&pb=clean-planet-positive-badge-2021",
      "altImage": "https://www.sephora.com/productimages/sku/s2414035-av-02-zoom.jpg?imwidth=270",
      "moreColors": 1,
      "onSaleData": "NONE",
      "productId": "P468206",
      "rating": "4.387",
      "reviews": "1274",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/saie-glowy-super-gel-lightweight-dewy-highlighter-P468206?skuId=2414035",
      "sponsored": false
  },
  {
      "brandName": "Benefit Cosmetics",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Benefit Cosmetics - Hoola Bronzer",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$19.00 - $36.00",
          "skuId": "2520419",
          "skuType": "Standard"
      },
      "displayName": "Hoola Bronzer",
      "heroImage": "https://www.sephora.com/productimages/sku/s2520419-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2520419-av-1-zoom.jpg?imwidth=270",
      "moreColors": 4,
      "onSaleData": "NONE",
      "productId": "P290636",
      "rating": "4.4579",
      "reviews": "3387",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/hoola-matte-bronzer-P290636?skuId=2520419",
      "sponsored": false
  },
  {
      "brandName": "SEPHORA COLLECTION",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "SEPHORA COLLECTION - Lip Last Matte Lipstick",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$15.00",
          "salePrice": "$5.00",
          "skuId": "2296275",
          "skuType": "Standard"
      },
      "displayName": "Lip Last Matte Lipstick",
      "heroImage": "https://www.sephora.com/productimages/sku/s2296275-main-zoom.jpg?imwidth=270&pb=2023-03-sephora-value-2023",
      "altImage": "https://www.sephora.com/productimages/product/p460716-av-01-zoom.jpg?imwidth=270",
      "moreColors": 16,
      "onSaleData": "FULL",
      "productId": "P460716",
      "rating": "3.3733",
      "reviews": "150",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/sephora-collection-lip-last-matte-lipstick-P460716?skuId=2296275",
      "sponsored": false
  },
  {
      "brandName": "tarte",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "tarte - Maracuja Juicy Lip Plump",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": true,
          "isOnlineOnly": true,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$24.00",
          "skuId": "2741098",
          "skuType": "Standard"
      },
      "displayName": "Maracuja Juicy Lip Plump",
      "heroImage": "https://www.sephora.com/productimages/sku/s2741098-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2741098-av-2-zoom.jpg?imwidth=270",
      "moreColors": 15,
      "onSaleData": "NONE",
      "productId": "P482750",
      "rating": "3.875",
      "reviews": "736",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/tarte-maracuja-juicy-lip-plump-P482750?skuId=2741098",
      "sponsored": false
  },
  {
      "brandName": "Grande Cosmetics",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Grande Cosmetics - GrandeLASH - MD Lash Enhancing Serum",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isSephoraExclusive": false,
          "listPrice": "$68.00",
          "skuId": "1923275",
          "skuType": "Standard"
      },
      "displayName": "GrandeLASH - MD Lash Enhancing Serum",
      "heroImage": "https://sephora.com/productimages/sku/s1923275-main-zoom.jpg?imwidth=270",
      "productId": "P419219",
      "rating": "4.1783",
      "reviews": "5054",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/grandlash-tm-md-lash-enhancing-serum-P419219",
      "impression_id": "0656cda2-fad5-443d-8b83-a061eedd6c79",
      "impression_tracker": "https://sephora.ms.tagdelivery.com/impression?id=0656cda2-fad5-443d-8b83-a061eedd6c79&x=E8cxZBBBuI_RAhQDC1va-kREBz-CURdGoRhk7gXf-uQq-2_hiIjMnJeRt_XhXzVEwWfEXl2OBlRfZV3eIjZ09DFkfRw_1gaAbkUjoPzjNbNWhmlx1WSQB3noYXp_d_qd7sNXJyAkV02Ko6JRHIQm5aYzoGJYJwyCUboeiqEbHUcpfXNMNecAc3u7IGT_wcD8u7NG0jp1JS9op20l6dYe1_L9ncfOpfDOeWT-ZPbJXjlIHdA3BzazvuPetp573wnL0hg_qfnc-sxkYUITJKwmuBAaVGfZC5N1LXkyDdZ02t5krLTidTLJvoRLOfEo2Mmin1kiwpcQrUh-oEyhF_6to4vL8B0_XDRstHb5EQTXWqlzmveaDczGIpAAu5RNtEsIE6YwWfiWeeFD2UpdkMJjt524jZI0FRqgSqOKYvGYOFFlzAxZwhL9Bo9mpfYq2-7UvgYnpmlbtJh8MbGjbMVxvlwrYkKH_SxyUPDaWm6hLv0xZDZgsC2MiC3fXYWcCjQrY4rPYtvaVbwGTc4igi_3VsB1e96hVHgca8OMeSXGbhyVyhdXNe3ZqmrwdVlf2P6T",
      "sponsored": true,
      "impression_payload": "E8cxZBBBuI_RAhQDC1va-kREBz-CURdGoRhk7gXf-uQq-2_hiIjMnJeRt_XhXzVEwWfEXl2OBlRfZV3eIjZ09DFkfRw_1gaAbkUjoPzjNbNWhmlx1WSQB3noYXp_d_qd7sNXJyAkV02Ko6JRHIQm5aYzoGJYJwyCUboeiqEbHUcpfXNMNecAc3u7IGT_wcD8u7NG0jp1JS9op20l6dYe1_L9ncfOpfDOeWT-ZPbJXjlIHdA3BzazvuPetp573wnL0hg_qfnc-sxkYUITJKwmuBAaVGfZC5N1LXkyDdZ02t5krLTidTLJvoRLOfEo2Mmin1kiwpcQrUh-oEyhF_6to4vL8B0_XDRstHb5EQTXWqlzmveaDczGIpAAu5RNtEsIE6YwWfiWeeFD2UpdkMJjt524jZI0FRqgSqOKYvGYOFFlzAxZwhL9Bo9mpfYq2-7UvgYnpmlbtJh8MbGjbMVxvlwrYkKH_SxyUPDaWm6hLv0xZDZgsC2MiC3fXYWcCjQrY4rPYtvaVbwGTc4igi_3VsB1e96hVHgca8OMeSXGbhyVyhdXNe3ZqmrwdVlf2P6T",
      "click_tracker": "https://sephora.ms.tagdelivery.com/click?id=0656cda2-fad5-443d-8b83-a061eedd6c79&x=E8cxZBBBuI_RAhQDC1va-kREBz-CURdGoRhk7gXf-uQq-2_hiIjMnJeRt_XhXzVEwWfEXl2OBlRfZV3eIjZ09DFkfRw_1gaAbkUjoPzjNbNWhmlx1WSQB3noYXp_d_qd7sNXJyAkV02Ko6JRHIQm5aYzoGJYJwyCUboeiqEbHUcpfXNMNecAc3u7IGT_wcD8u7NG0jp1JS9op20l6dYe1_L9ncfOpfDOeWT-ZPbJXjlIHdA3BzazvuPetp573wnL0hg_qfnc-sxkYUITJKwmuBAaVGfZC5N1LXkyDdZ02t5krLTidTLJvoRLOfEo2Mmin1kiwpcQrUh-oEyhF_6to4vL8B0_XDRstHb5EQTXWqlzmveaDczGIpAAu5RNtEsIE6YwWfiWeeFD2UpdkMJjt524jZI0FRqgSqOKYvGYOFFlzAxZwhL9Bo9mpfYq2-7UvgYnpmlbtJh8MbGjbMVxvlwrYkKH_SxyUPDaWm6hLv0xZDZgsC2MiC3fXYWcCjQrY4rPYtvaVbwGTc4igi_3VsB1e96hVHgca8OMeSXGbhyVyhdXNe3ZqmrwdVlf2P6T&redirect="
  },
  {
      "brandName": "KVD Beauty",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "KVD Beauty - Good Apple Lightweight Full-Coverage Concealer",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isSephoraExclusive": false,
          "listPrice": "$30.00",
          "skuId": "2517142",
          "skuType": "Standard"
      },
      "displayName": "Good Apple Lightweight Full-Coverage Concealer",
      "heroImage": "https://sephora.com/productimages/sku/s2517142-main-zoom.jpg?imwidth=270",
      "moreColors": 31,
      "productId": "P481106",
      "rating": "4.2296",
      "reviews": "614",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/kvd-vegan-beauty-good-apple-lightweight-full-coverage-concealer-P481106",
      "impression_id": "6a61290c-1f95-474e-9b0a-8751d2de63b6",
      "impression_tracker": "https://sephora.ms.tagdelivery.com/impression?id=6a61290c-1f95-474e-9b0a-8751d2de63b6&x=l2lw3LuYaN6Mfg1LVZ3x1AZwZh2b9O8gTL_5q2an-_5B6vYapXVUOOSM5MN-JSFMlg8i7Q9MLXsOGeM8sqke8DAvXwZCt4zGSMYQJdIH8m9Xl3d4nmCNPt91OZUA9v5EATBa64beTGp0_gjmQcgLT-SSXFTcnnhXXGe5TJmgOnl5imY8jby_1KB9n8HYDpxnhVhR05PSOI0E7Mtc2ijOQCgQC4kFmLUB3Usv8ygch0bcD6d1uxHQS7mQZQljL_bjwp3vjnSkqTsV6bQMBluu1pntU9FmMPvW_aOxPQUkIM4UMzmo9GtP9cHM3oim10DvDFfRslUuWzolkBQSjBvcVk9M0HnXk7K2PbhwkOiolvE8ZhxzWan2xLehWaKLavFswVcF_d1__YZPfcrRL7AoY-2O9z0wQo0c6-5YcgqDQuxrjorxzAmD5w0EmEM6pjQGjSiPMDlruS8qpK7habG05D014wHRwWdTSpkI97OAur-_6LaV3oaDiutfFHONVlCnQOaFbzHztQZxVBhX1MKMI01yN8KX0imAfP6i_ye5ZqrcKEXLeD3-oQwo-13entp6",
      "sponsored": true,
      "impression_payload": "l2lw3LuYaN6Mfg1LVZ3x1AZwZh2b9O8gTL_5q2an-_5B6vYapXVUOOSM5MN-JSFMlg8i7Q9MLXsOGeM8sqke8DAvXwZCt4zGSMYQJdIH8m9Xl3d4nmCNPt91OZUA9v5EATBa64beTGp0_gjmQcgLT-SSXFTcnnhXXGe5TJmgOnl5imY8jby_1KB9n8HYDpxnhVhR05PSOI0E7Mtc2ijOQCgQC4kFmLUB3Usv8ygch0bcD6d1uxHQS7mQZQljL_bjwp3vjnSkqTsV6bQMBluu1pntU9FmMPvW_aOxPQUkIM4UMzmo9GtP9cHM3oim10DvDFfRslUuWzolkBQSjBvcVk9M0HnXk7K2PbhwkOiolvE8ZhxzWan2xLehWaKLavFswVcF_d1__YZPfcrRL7AoY-2O9z0wQo0c6-5YcgqDQuxrjorxzAmD5w0EmEM6pjQGjSiPMDlruS8qpK7habG05D014wHRwWdTSpkI97OAur-_6LaV3oaDiutfFHONVlCnQOaFbzHztQZxVBhX1MKMI01yN8KX0imAfP6i_ye5ZqrcKEXLeD3-oQwo-13entp6",
      "click_tracker": "https://sephora.ms.tagdelivery.com/click?id=6a61290c-1f95-474e-9b0a-8751d2de63b6&x=l2lw3LuYaN6Mfg1LVZ3x1AZwZh2b9O8gTL_5q2an-_5B6vYapXVUOOSM5MN-JSFMlg8i7Q9MLXsOGeM8sqke8DAvXwZCt4zGSMYQJdIH8m9Xl3d4nmCNPt91OZUA9v5EATBa64beTGp0_gjmQcgLT-SSXFTcnnhXXGe5TJmgOnl5imY8jby_1KB9n8HYDpxnhVhR05PSOI0E7Mtc2ijOQCgQC4kFmLUB3Usv8ygch0bcD6d1uxHQS7mQZQljL_bjwp3vjnSkqTsV6bQMBluu1pntU9FmMPvW_aOxPQUkIM4UMzmo9GtP9cHM3oim10DvDFfRslUuWzolkBQSjBvcVk9M0HnXk7K2PbhwkOiolvE8ZhxzWan2xLehWaKLavFswVcF_d1__YZPfcrRL7AoY-2O9z0wQo0c6-5YcgqDQuxrjorxzAmD5w0EmEM6pjQGjSiPMDlruS8qpK7habG05D014wHRwWdTSpkI97OAur-_6LaV3oaDiutfFHONVlCnQOaFbzHztQZxVBhX1MKMI01yN8KX0imAfP6i_ye5ZqrcKEXLeD3-oQwo-13entp6&redirect="
  },
  {
      "brandName": "SEPHORA COLLECTION",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "SEPHORA COLLECTION - Lip Sleeping Mask",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$5.00",
          "skuId": "2345189",
          "skuType": "Standard"
      },
      "displayName": "Lip Sleeping Mask",
      "heroImage": "https://www.sephora.com/productimages/sku/s2345189-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019",
      "altImage": "https://www.sephora.com/productimages/product/p467652-av-01-zoom.jpg?imwidth=270",
      "moreColors": 2,
      "onSaleData": "NONE",
      "productId": "P467652",
      "rating": "3.7368",
      "reviews": "703",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/sephora-collection-lip-sleeping-mask-P467652?skuId=2345189",
      "sponsored": false
  },
  {
      "brandName": "LANEIGE",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "LANEIGE - Lip Sleeping Mask Intense Hydration with Vitamin C",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$24.00",
          "skuId": "1966258",
          "skuType": "Standard"
      },
      "displayName": "Lip Sleeping Mask Intense Hydration with Vitamin C",
      "heroImage": "https://www.sephora.com/productimages/sku/s1966258-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s1966258-av-20-zoom.jpg?imwidth=270",
      "moreColors": 4,
      "onSaleData": "NONE",
      "productId": "P420652",
      "rating": "4.3351",
      "reviews": "17426",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/lip-sleeping-mask-P420652?skuId=1966258",
      "sponsored": false
  },
  {
      "brandName": "PATRICK TA",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "PATRICK TA - Major Headlines Double-Take Crème & Powder Blush Duo",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$36.00",
          "skuId": "2363836",
          "skuType": "Standard"
      },
      "displayName": "Major Headlines Double-Take Crème & Powder Blush Duo",
      "heroImage": "https://www.sephora.com/productimages/sku/s2363836-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2363836-av-7-zoom.jpg?imwidth=270",
      "moreColors": 10,
      "onSaleData": "NONE",
      "productId": "P458747",
      "rating": "4.7944",
      "reviews": "1984",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/patrick-ta-major-headlines-cream-powder-blush-duo-P458747?skuId=2363836",
      "sponsored": false
  },
  {
      "brandName": "SEPHORA COLLECTION",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "SEPHORA COLLECTION - Bright Future Gel Serum Under Eye Concealer",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$15.00",
          "salePrice": "$6.00",
          "skuId": "1686153",
          "skuType": "Standard"
      },
      "displayName": "Bright Future Gel Serum Under Eye Concealer",
      "heroImage": "https://www.sephora.com/productimages/sku/s1686153-main-zoom.jpg?imwidth=270&pb=2023-03-sephora-value-2023",
      "altImage": "https://www.sephora.com/productimages/sku/s1686153-av-10-zoom.jpg?imwidth=270",
      "moreColors": 20,
      "onSaleData": "FULL",
      "productId": "P398009",
      "rating": "4.0345",
      "reviews": "3569",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/bright-future-gel-serum-concealer-P398009?skuId=1686153",
      "sponsored": false
  },
  {
      "brandName": "Fenty Beauty by Rihanna",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Fenty Beauty by Rihanna - Gloss Bomb Universal Lip Luminizer",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$21.00",
          "skuId": "2662468",
          "skuType": "Standard"
      },
      "displayName": "Gloss Bomb Universal Lip Luminizer",
      "heroImage": "https://www.sephora.com/productimages/sku/s2662468-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2662468-av-8-zoom.jpg?imwidth=270",
      "moreColors": 7,
      "onSaleData": "NONE",
      "productId": "P67988453",
      "rating": "4.6259",
      "reviews": "12632",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/gloss-bomb-universal-lip-luminizer-P67988453?skuId=2662468",
      "sponsored": false
  },
  {
      "brandName": "Too Faced",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Too Faced - Born This Way Super Coverage Multi-Use Concealer",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$16.00 - $36.00",
          "skuId": "2084408",
          "skuType": "Standard"
      },
      "displayName": "Born This Way Super Coverage Multi-Use Concealer",
      "heroImage": "https://www.sephora.com/productimages/sku/s2084408-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2084408-av-14-zoom.jpg?imwidth=270",
      "moreColors": 33,
      "onSaleData": "NONE",
      "productId": "P432298",
      "rating": "4.303",
      "reviews": "4574",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/born-this-way-super-coverage-multi-use-sculpting-concealer-P432298?skuId=2084408",
      "sponsored": false
  },
  {
      "brandName": "KVD Beauty",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "KVD Beauty - Good Apple Non-Comedogenic Full-Coverage Serum Foundation",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isSephoraExclusive": false,
          "listPrice": "$42.00",
          "skuId": "2646180",
          "skuType": "Standard"
      },
      "displayName": "Good Apple Non-Comedogenic Full-Coverage Serum Foundation",
      "heroImage": "https://sephora.com/productimages/sku/s2646180-main-zoom.jpg?imwidth=270",
      "moreColors": 39,
      "productId": "P504366",
      "rating": "3.9188",
      "reviews": "998",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/kvd-vegan-beauty-good-apple-full-coverage-transfer-proof-vegan-serum-foundation-P504366",
      "impression_id": "e4ae3be1-5fb9-47da-8a57-67b9b05d0f7a",
      "impression_tracker": "https://sephora.ms.tagdelivery.com/impression?id=e4ae3be1-5fb9-47da-8a57-67b9b05d0f7a&x=nD1h-rCHfRpmA_qhlpM_WZd2eZLwoTfp5wzyi1HVTxim0MLMekg2lAoxGUfXERQV_C3UCeQP0xdhV8v7ekOgUuAb9eGV3oibloXjaajMz-y80BtEp5pMEApkZAdqjjzswaEVdNDXBQk4qHKXp0dXtuBAmn530dYCrSLGSDqun3i1VBBAliIEkOxJc-Uof_hqXawPzAY36l4Y7HNax3a6eMOrU06mPrG26bCkMsrLhmpNJoirZUpzytDPa7RrXl_bnh-YUHugdlyBBAv3ZNMgUHCQlkbpafA7FxjW9YEIXdtA24XTexmLj66a1udw1ODmVZtdvJA5hZS9RPCQWXdEmtwYvpYUu5_0ciuPPcaVuOAzlQlY2-YN4eW1HTdmF4kKgu8-dZwKMBq7nofkhHpbOAZlYGpbw9Cu8DXR5kXKIj5TH-LceTQpVGe-TOVXCjOZVulIoi1Yn-hvE1SepL9oy6wp_2iXeENmDEjD8rBbpFvGVQWRMigkxyoWRhTcWhtUBuO2TawyGU5C2bdsFBwKoD9XQUqK6H-npkKHmsGxvmVFbM7nIl1e59GrCnVENs1l",
      "sponsored": true,
      "impression_payload": "nD1h-rCHfRpmA_qhlpM_WZd2eZLwoTfp5wzyi1HVTxim0MLMekg2lAoxGUfXERQV_C3UCeQP0xdhV8v7ekOgUuAb9eGV3oibloXjaajMz-y80BtEp5pMEApkZAdqjjzswaEVdNDXBQk4qHKXp0dXtuBAmn530dYCrSLGSDqun3i1VBBAliIEkOxJc-Uof_hqXawPzAY36l4Y7HNax3a6eMOrU06mPrG26bCkMsrLhmpNJoirZUpzytDPa7RrXl_bnh-YUHugdlyBBAv3ZNMgUHCQlkbpafA7FxjW9YEIXdtA24XTexmLj66a1udw1ODmVZtdvJA5hZS9RPCQWXdEmtwYvpYUu5_0ciuPPcaVuOAzlQlY2-YN4eW1HTdmF4kKgu8-dZwKMBq7nofkhHpbOAZlYGpbw9Cu8DXR5kXKIj5TH-LceTQpVGe-TOVXCjOZVulIoi1Yn-hvE1SepL9oy6wp_2iXeENmDEjD8rBbpFvGVQWRMigkxyoWRhTcWhtUBuO2TawyGU5C2bdsFBwKoD9XQUqK6H-npkKHmsGxvmVFbM7nIl1e59GrCnVENs1l",
      "click_tracker": "https://sephora.ms.tagdelivery.com/click?id=e4ae3be1-5fb9-47da-8a57-67b9b05d0f7a&x=nD1h-rCHfRpmA_qhlpM_WZd2eZLwoTfp5wzyi1HVTxim0MLMekg2lAoxGUfXERQV_C3UCeQP0xdhV8v7ekOgUuAb9eGV3oibloXjaajMz-y80BtEp5pMEApkZAdqjjzswaEVdNDXBQk4qHKXp0dXtuBAmn530dYCrSLGSDqun3i1VBBAliIEkOxJc-Uof_hqXawPzAY36l4Y7HNax3a6eMOrU06mPrG26bCkMsrLhmpNJoirZUpzytDPa7RrXl_bnh-YUHugdlyBBAv3ZNMgUHCQlkbpafA7FxjW9YEIXdtA24XTexmLj66a1udw1ODmVZtdvJA5hZS9RPCQWXdEmtwYvpYUu5_0ciuPPcaVuOAzlQlY2-YN4eW1HTdmF4kKgu8-dZwKMBq7nofkhHpbOAZlYGpbw9Cu8DXR5kXKIj5TH-LceTQpVGe-TOVXCjOZVulIoi1Yn-hvE1SepL9oy6wp_2iXeENmDEjD8rBbpFvGVQWRMigkxyoWRhTcWhtUBuO2TawyGU5C2bdsFBwKoD9XQUqK6H-npkKHmsGxvmVFbM7nIl1e59GrCnVENs1l&redirect="
  },
  {
      "brandName": "SEPHORA COLLECTION",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "SEPHORA COLLECTION - Sephora Destinations™ Eye Palette",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": true,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$15.00",
          "salePrice": "$7.50",
          "skuId": "2600708",
          "skuType": "Standard"
      },
      "displayName": "Sephora Destinations™ Eye Palette",
      "heroImage": "https://www.sephora.com/productimages/sku/s2600708-main-zoom.jpg?imwidth=270&pb=2023-03-sephora-value-2023",
      "altImage": "https://www.sephora.com/productimages/sku/s2600708-av-8-zoom.jpg?imwidth=270",
      "moreColors": 1,
      "onSaleData": "FULL",
      "productId": "P503900",
      "rating": "3.8154",
      "reviews": "65",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/sephora-collection-sc-destinations-eye-palette-P503900?skuId=2600708",
      "sponsored": false
  },
  {
      "brandName": "The Ordinary",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "The Ordinary - Multi-Peptide Lash and Brow Serum",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$14.50",
          "skuId": "2532588",
          "skuType": "Standard"
      },
      "displayName": "Multi-Peptide Lash and Brow Serum",
      "heroImage": "https://www.sephora.com/productimages/sku/s2532588-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/product/p500423-av-1-zoom.jpg?imwidth=270",
      "onSaleData": "NONE",
      "productId": "P500423",
      "rating": "3.9051",
      "reviews": "3265",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/multi-peptide-lash-brow-serum-P500423?skuId=2532588",
      "sponsored": false
  },
  {
      "brandName": "Anastasia Beverly Hills",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Anastasia Beverly Hills - Mini Medium Hold Clear Brow Gel",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$9.00",
          "skuId": "2311330",
          "skuType": "Standard"
      },
      "displayName": "Mini Medium Hold Clear Brow Gel",
      "heroImage": "https://www.sephora.com/productimages/sku/s2311330-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2311330-av-5-zoom.jpg?imwidth=270",
      "moreColors": 0,
      "onSaleData": "NONE",
      "productId": "P454751",
      "rating": "4.1024",
      "reviews": "166",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/anastasia-beverly-hills-clear-brow-gel-mini-P454751?skuId=2311330",
      "sponsored": false
  },
  {
      "brandName": "SEPHORA COLLECTION",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "SEPHORA COLLECTION - Cream Lip Stain Liquid Lipstick",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$15.00",
          "skuId": "1296060",
          "skuType": "Standard"
      },
      "displayName": "Cream Lip Stain Liquid Lipstick",
      "heroImage": "https://www.sephora.com/productimages/sku/s1296060-main-zoom.jpg?imwidth=270&pb=2023-03-sephora-value-2023",
      "altImage": "https://www.sephora.com/productimages/sku/s1296060-av-01-zoom.jpg?imwidth=270",
      "moreColors": 73,
      "onSaleData": "NONE",
      "productId": "P281411",
      "rating": "4.3088",
      "reviews": "11420",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/cream-lip-stain-liquid-lipstick-P281411?skuId=1296060",
      "sponsored": false
  },
  {
      "brandName": "NARS",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "NARS - Mini Radiant Creamy Concealer",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$15.00",
          "skuId": "2245363",
          "skuType": "Standard"
      },
      "displayName": "Mini Radiant Creamy Concealer",
      "heroImage": "https://www.sephora.com/productimages/sku/s2245363-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2245363-av-16-zoom.jpg?imwidth=270",
      "moreColors": 29,
      "onSaleData": "NONE",
      "productId": "P422077",
      "rating": "4.1218",
      "reviews": "1987",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/radiant-creamy-concealer-mini-P422077?skuId=2245363",
      "sponsored": false
  },
  {
      "brandName": "KVD Beauty",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "KVD Beauty - Dazzle Vegan Long-Wear Eyeshadow Stick",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isSephoraExclusive": false,
          "listPrice": "$24.00",
          "skuId": "2612133",
          "skuType": "Standard"
      },
      "displayName": "Dazzle Vegan Long-Wear Eyeshadow Stick",
      "heroImage": "https://sephora.com/productimages/sku/s2612133-main-zoom.jpg?imwidth=270",
      "moreColors": 5,
      "productId": "P464781",
      "rating": "4.4932",
      "reviews": "148",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/kvd-vegan-beauty-dazzle-stick-eyeshadow-P464781",
      "impression_id": "36b7d426-1c40-4b97-9567-99d4723b40f9",
      "impression_tracker": "https://sephora.ms.tagdelivery.com/impression?id=36b7d426-1c40-4b97-9567-99d4723b40f9&x=ArRXAY28xzq6HXJgU7VdriYs4MWRWNJnzv3VZ5Vtjv6TgoyksDPWx6nz23PQQ-c3hh1_ynecvRh7NE_T4hTHeB7s8KBGf-hYkd9ZVqkMYbAQRUSlK62GWg3aKio9kkiAfGNbTkpmdr6unmv8u3lzWJhTWJZlpHlcOxFBp0SS2g8fRdDrNyia69UoNyfGT1OJNs2OuOSY8fdN1dhsOC4w6YFgIJNTE8QAQeek6eR7Iq17zj6gJA0i43LCGAIXhIATQK3A5dSmpRfJb6czcYaqrsUeOQD-Fcer_BcORNss3t4oTmPMvknAFy3dA0DLlTeyPtAj6XeyN_vkPZxlTITq6qd46ZaeZTIHBEaLyXMCF0F8Tqjx1LR-Dh4NN5W40HSzQ22kTAvZXtlxVQBF4Vv156xxf9ogCdl2tdIoJVAp7WD5nJpwVcHd-_LfDqn_dYKWeP3J2McnlPh9Gh_PjzX8OSBTt9pwXd3lXa8t7d5N0Fce6SCDerEYGZn5f9OvgV5uqYHlh2AZ4vo1ADabE4ZJLlMErgn8UksgVGsYafSAtDF9yNlOFV7EFHMqCT6GD7-f",
      "sponsored": true,
      "impression_payload": "ArRXAY28xzq6HXJgU7VdriYs4MWRWNJnzv3VZ5Vtjv6TgoyksDPWx6nz23PQQ-c3hh1_ynecvRh7NE_T4hTHeB7s8KBGf-hYkd9ZVqkMYbAQRUSlK62GWg3aKio9kkiAfGNbTkpmdr6unmv8u3lzWJhTWJZlpHlcOxFBp0SS2g8fRdDrNyia69UoNyfGT1OJNs2OuOSY8fdN1dhsOC4w6YFgIJNTE8QAQeek6eR7Iq17zj6gJA0i43LCGAIXhIATQK3A5dSmpRfJb6czcYaqrsUeOQD-Fcer_BcORNss3t4oTmPMvknAFy3dA0DLlTeyPtAj6XeyN_vkPZxlTITq6qd46ZaeZTIHBEaLyXMCF0F8Tqjx1LR-Dh4NN5W40HSzQ22kTAvZXtlxVQBF4Vv156xxf9ogCdl2tdIoJVAp7WD5nJpwVcHd-_LfDqn_dYKWeP3J2McnlPh9Gh_PjzX8OSBTt9pwXd3lXa8t7d5N0Fce6SCDerEYGZn5f9OvgV5uqYHlh2AZ4vo1ADabE4ZJLlMErgn8UksgVGsYafSAtDF9yNlOFV7EFHMqCT6GD7-f",
      "click_tracker": "https://sephora.ms.tagdelivery.com/click?id=36b7d426-1c40-4b97-9567-99d4723b40f9&x=ArRXAY28xzq6HXJgU7VdriYs4MWRWNJnzv3VZ5Vtjv6TgoyksDPWx6nz23PQQ-c3hh1_ynecvRh7NE_T4hTHeB7s8KBGf-hYkd9ZVqkMYbAQRUSlK62GWg3aKio9kkiAfGNbTkpmdr6unmv8u3lzWJhTWJZlpHlcOxFBp0SS2g8fRdDrNyia69UoNyfGT1OJNs2OuOSY8fdN1dhsOC4w6YFgIJNTE8QAQeek6eR7Iq17zj6gJA0i43LCGAIXhIATQK3A5dSmpRfJb6czcYaqrsUeOQD-Fcer_BcORNss3t4oTmPMvknAFy3dA0DLlTeyPtAj6XeyN_vkPZxlTITq6qd46ZaeZTIHBEaLyXMCF0F8Tqjx1LR-Dh4NN5W40HSzQ22kTAvZXtlxVQBF4Vv156xxf9ogCdl2tdIoJVAp7WD5nJpwVcHd-_LfDqn_dYKWeP3J2McnlPh9Gh_PjzX8OSBTt9pwXd3lXa8t7d5N0Fce6SCDerEYGZn5f9OvgV5uqYHlh2AZ4vo1ADabE4ZJLlMErgn8UksgVGsYafSAtDF9yNlOFV7EFHMqCT6GD7-f&redirect="
  },
  {
      "brandName": "Charlotte Tilbury",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Charlotte Tilbury - Mini Airbrush Flawless Setting Spray",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$23.00",
          "skuId": "2368447",
          "skuType": "Standard"
      },
      "displayName": "Mini Airbrush Flawless Setting Spray",
      "heroImage": "https://www.sephora.com/productimages/sku/s2368447-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2368447-av-7-zoom.jpg?imwidth=270",
      "onSaleData": "NONE",
      "productId": "P461148",
      "rating": "4.2688",
      "reviews": "770",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/charlotte-tilbury-mini-airbrush-flawless-setting-spray-P461148?skuId=2368447",
      "sponsored": false
  },
  {
      "brandName": "Benefit Cosmetics",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Benefit Cosmetics - Benetint Liquid Lip Blush & Cheek Tint",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$24.00 - $33.00",
          "skuId": "108779",
          "skuType": "Standard"
      },
      "displayName": "Benetint Liquid Lip Blush & Cheek Tint",
      "heroImage": "https://www.sephora.com/productimages/sku/s108779-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s108779-av-18-zoom.jpg?imwidth=270",
      "moreColors": 2,
      "onSaleData": "NONE",
      "productId": "P1272",
      "rating": "4.1516",
      "reviews": "4182",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/benetint-cheek-lip-stain-P1272?skuId=108779",
      "sponsored": false
  },
  {
      "brandName": "Rare Beauty by Selena Gomez",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Rare Beauty by Selena Gomez - Positive Light Under Eye Brightener",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$24.00",
          "skuId": "2629418",
          "skuType": "Standard"
      },
      "displayName": "Positive Light Under Eye Brightener",
      "heroImage": "https://www.sephora.com/productimages/sku/s2629418-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2629418-av-2-zoom.jpg?imwidth=270",
      "moreColors": 5,
      "onSaleData": "NONE",
      "productId": "P503714",
      "rating": "4.1841",
      "reviews": "1412",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/rare-beauty-by-selena-gomez-under-eye-brightener-P503714?skuId=2629418",
      "sponsored": false
  },
  {
      "brandName": "SEPHORA COLLECTION",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "SEPHORA COLLECTION - Sephora Colorful® Lip Gloss Balm",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$9.00 - $10.00",
          "salePrice": "$5.00",
          "skuId": "1735554",
          "skuType": "Standard"
      },
      "displayName": "Sephora Colorful® Lip Gloss Balm",
      "heroImage": "https://www.sephora.com/productimages/sku/s1735554-main-zoom.jpg?imwidth=270&pb=2023-03-sephora-value-2023",
      "altImage": "https://www.sephora.com/productimages/product/p403322-av-01-zoom.jpg?imwidth=270",
      "moreColors": 28,
      "onSaleData": "PARTIAL",
      "productId": "P403322",
      "rating": "4.1895",
      "reviews": "1235",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/colorful-gloss-balm-P403322?skuId=1735554",
      "sponsored": false
  },
  {
      "brandName": "Tower 28 Beauty",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Tower 28 Beauty - Mini SOS Daily Rescue Facial Spray",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$12.00",
          "skuId": "2527836",
          "skuType": "Standard"
      },
      "displayName": "Mini SOS Daily Rescue Facial Spray",
      "heroImage": "https://www.sephora.com/productimages/sku/s2527836-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019",
      "altImage": "https://www.sephora.com/productimages/sku/s2527836-av-50-zoom.jpg?imwidth=270",
      "onSaleData": "NONE",
      "productId": "P448853",
      "rating": "3.7887",
      "reviews": "497",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/sos-save-our-skin-daily-rescue-facial-spray-mini-P448853?skuId=2527836",
      "sponsored": false
  },
  {
      "brandName": "CLINIQUE",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "CLINIQUE - Almost Lipstick",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$24.00",
          "skuId": "70680",
          "skuType": "Standard"
      },
      "displayName": "Almost Lipstick",
      "heroImage": "https://www.sephora.com/productimages/sku/s70680-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s70680-av-6-zoom.jpg?imwidth=270",
      "moreColors": 1,
      "onSaleData": "NONE",
      "productId": "P122751",
      "rating": "4.4053",
      "reviews": "4303",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/almost-lipstick-P122751?skuId=70680",
      "sponsored": false
  },
  {
      "brandName": "Dior",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Dior - Rosy Glow Blush",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$40.00",
          "skuId": "2666030",
          "skuType": "Standard"
      },
      "displayName": "Rosy Glow Blush",
      "heroImage": "https://www.sephora.com/productimages/sku/s2666030-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2666030-av-7-zoom.jpg?imwidth=270",
      "moreColors": 5,
      "onSaleData": "NONE",
      "productId": "P454762",
      "rating": "4.2494",
      "reviews": "1299",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/dior-rosy-glow-blush-P454762?skuId=2666030",
      "sponsored": false
  },
  {
      "brandName": "SEPHORA COLLECTION",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "SEPHORA COLLECTION - 8 Pan Eyeshadow Palette",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": true,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$10.00",
          "salePrice": "$6.00",
          "skuId": "2682169",
          "skuType": "Standard"
      },
      "displayName": "8 Pan Eyeshadow Palette",
      "heroImage": "https://www.sephora.com/productimages/sku/s2682169-main-zoom.jpg?imwidth=270&pb=2023-03-sephora-value-2023",
      "altImage": "https://www.sephora.com/productimages/sku/s2682169-av-1-zoom.jpg?imwidth=270",
      "onSaleData": "FULL",
      "productId": "P508485",
      "rating": "4.25",
      "reviews": "16",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/8-pan-eyeshadow-palette-P508485?skuId=2682169",
      "sponsored": false
  },
  {
      "brandName": "Charlotte Tilbury",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Charlotte Tilbury - Airbrush Flawless Finish Setting Powder",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$28.00 - $48.00",
          "skuId": "2605988",
          "skuType": "Standard"
      },
      "displayName": "Airbrush Flawless Finish Setting Powder",
      "heroImage": "https://www.sephora.com/productimages/sku/s2605988-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2605988-av-2-zoom.jpg?imwidth=270",
      "moreColors": 3,
      "onSaleData": "NONE",
      "productId": "P433526",
      "rating": "4.161",
      "reviews": "2193",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/airbrush-flawless-finish-setting-powder-P433526?skuId=2605988",
      "sponsored": false
  },
  {
      "brandName": "Glow Recipe",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Glow Recipe - Watermelon Glow Niacinamide Dew Drops Serum",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$20.00 - $49.00",
          "skuId": "2404846",
          "skuType": "Standard"
      },
      "displayName": "Watermelon Glow Niacinamide Dew Drops Serum",
      "heroImage": "https://www.sephora.com/productimages/sku/s2404846-main-zoom.jpg?imwidth=270&pb=clean-planet-positive-badge-2021",
      "altImage": "https://www.sephora.com/productimages/sku/s2404846-av-8-zoom.jpg?imwidth=270",
      "onSaleData": "NONE",
      "productId": "P466123",
      "rating": "4.3273",
      "reviews": "3508",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/glow-recipe-watermelon-glow-niacinamide-dew-drops-P466123?skuId=2404846",
      "sponsored": false
  },
  {
      "brandName": "IT Cosmetics",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "IT Cosmetics - Mini Bye Bye Under Eye Full Coverage Anti-Aging Waterproof Concealer",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isSephoraExclusive": false,
          "listPrice": "$14.00",
          "skuId": "2224053",
          "skuType": "Standard"
      },
      "displayName": "Mini Bye Bye Under Eye Full Coverage Anti-Aging Waterproof Concealer",
      "heroImage": "https://sephora.com/productimages/sku/s2224053-main-zoom.jpg?imwidth=270",
      "moreColors": 3,
      "productId": "P446901",
      "rating": "3.7348",
      "reviews": "230",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/bye-bye-under-eye-full-coverage-anti-aging-waterproof-concealer-mini-P446901",
      "impression_id": "b30b2092-4adb-4ae9-929f-aba0f2056513",
      "impression_tracker": "https://sephora.ms.tagdelivery.com/impression?id=b30b2092-4adb-4ae9-929f-aba0f2056513&x=Dd2qhZ6BgSZqswxnrabPdOkm8PmFVeO6IbPlk2UCb1Z6Ua0F9EMYQhY_Qp_36YTcDyJ2q0eK3GvJW98ITn6rew-x2KXPEd2XmU7Y8H9KbJb921YWy8ezfQTztW39Z-zhTvhVJBicahkUzG0xo8w1I05F8GTQ9A6ODqojd19nTYieqvA1Q5o5wTsWSgXceh4qn4RI1z7y194i7PyB_RwuQuLZSBQwzBXnIeLOZg4A8X47fJbnn-gZWgbcQr3cGvbkLY1GTY5J24d777ZZSm8y1OeaEPlYwRyWBlNTDbUcQr4_sQQ2Y504ndW4u7qijcRL35YN4dOxcr5bYowkQSMfWXYed-hvwK08sgN2t2lH5bETxHpbRacDwCe_mzgJK1WTh6sEuTQXSRwcoIR7HjvuZVEiGfDP5MOS5WimlNnnhVJ734SMTtDI54kxM1hlv89I_1Fquy31E365PSTa8IourGDC1sn56YRDuJrhtVTRMluh0L-kW7y_aQWX2TG7H-T-x9nI8Sj5vsuUZxCGAoeca3oaq9HFfI5TJG9BKPAsub5bMKPtP6hMmzcQFzGHQOSX",
      "sponsored": true,
      "impression_payload": "Dd2qhZ6BgSZqswxnrabPdOkm8PmFVeO6IbPlk2UCb1Z6Ua0F9EMYQhY_Qp_36YTcDyJ2q0eK3GvJW98ITn6rew-x2KXPEd2XmU7Y8H9KbJb921YWy8ezfQTztW39Z-zhTvhVJBicahkUzG0xo8w1I05F8GTQ9A6ODqojd19nTYieqvA1Q5o5wTsWSgXceh4qn4RI1z7y194i7PyB_RwuQuLZSBQwzBXnIeLOZg4A8X47fJbnn-gZWgbcQr3cGvbkLY1GTY5J24d777ZZSm8y1OeaEPlYwRyWBlNTDbUcQr4_sQQ2Y504ndW4u7qijcRL35YN4dOxcr5bYowkQSMfWXYed-hvwK08sgN2t2lH5bETxHpbRacDwCe_mzgJK1WTh6sEuTQXSRwcoIR7HjvuZVEiGfDP5MOS5WimlNnnhVJ734SMTtDI54kxM1hlv89I_1Fquy31E365PSTa8IourGDC1sn56YRDuJrhtVTRMluh0L-kW7y_aQWX2TG7H-T-x9nI8Sj5vsuUZxCGAoeca3oaq9HFfI5TJG9BKPAsub5bMKPtP6hMmzcQFzGHQOSX",
      "click_tracker": "https://sephora.ms.tagdelivery.com/click?id=b30b2092-4adb-4ae9-929f-aba0f2056513&x=Dd2qhZ6BgSZqswxnrabPdOkm8PmFVeO6IbPlk2UCb1Z6Ua0F9EMYQhY_Qp_36YTcDyJ2q0eK3GvJW98ITn6rew-x2KXPEd2XmU7Y8H9KbJb921YWy8ezfQTztW39Z-zhTvhVJBicahkUzG0xo8w1I05F8GTQ9A6ODqojd19nTYieqvA1Q5o5wTsWSgXceh4qn4RI1z7y194i7PyB_RwuQuLZSBQwzBXnIeLOZg4A8X47fJbnn-gZWgbcQr3cGvbkLY1GTY5J24d777ZZSm8y1OeaEPlYwRyWBlNTDbUcQr4_sQQ2Y504ndW4u7qijcRL35YN4dOxcr5bYowkQSMfWXYed-hvwK08sgN2t2lH5bETxHpbRacDwCe_mzgJK1WTh6sEuTQXSRwcoIR7HjvuZVEiGfDP5MOS5WimlNnnhVJ734SMTtDI54kxM1hlv89I_1Fquy31E365PSTa8IourGDC1sn56YRDuJrhtVTRMluh0L-kW7y_aQWX2TG7H-T-x9nI8Sj5vsuUZxCGAoeca3oaq9HFfI5TJG9BKPAsub5bMKPtP6hMmzcQFzGHQOSX&redirect="
  },
  {
      "brandName": "Charlotte Tilbury",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Charlotte Tilbury - Mini Pillow Talk Lipstick & Liner Set",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$25.00",
          "skuId": "2447738",
          "skuType": "Standard"
      },
      "displayName": "Mini Pillow Talk Lipstick & Liner Set",
      "heroImage": "https://www.sephora.com/productimages/sku/s2447738-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2447738-av-02-zoom.jpg?imwidth=270",
      "moreColors": 2,
      "onSaleData": "NONE",
      "productId": "P458268",
      "rating": "3.5209",
      "reviews": "1052",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/charlotte-tilbury-mini-pillow-talk-lip-duo-P458268?skuId=2447738",
      "sponsored": false
  },
  {
      "brandName": "SEPHORA COLLECTION",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "SEPHORA COLLECTION - Clean Lip Balm & Scrub",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$7.00",
          "skuId": "2557536",
          "skuType": "Standard"
      },
      "displayName": "Clean Lip Balm & Scrub",
      "heroImage": "https://www.sephora.com/productimages/sku/s2557536-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019",
      "altImage": "https://www.sephora.com/productimages/sku/s2557536-av-1-zoom.jpg?imwidth=270",
      "moreColors": 5,
      "onSaleData": "NONE",
      "productId": "P500744",
      "rating": "4.3002",
      "reviews": "663",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/clean-lip-balm-scrub-P500744?skuId=2557536",
      "sponsored": false
  },
  {
      "brandName": "Summer Fridays",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Summer Fridays - Lip Butter Balm for Hydration & Shine",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$24.00",
          "skuId": "2495497",
          "skuType": "Standard"
      },
      "displayName": "Lip Butter Balm for Hydration & Shine",
      "heroImage": "https://www.sephora.com/productimages/sku/s2495497-main-zoom.jpg?imwidth=270&pb=allure-2023-bestofbeauty-badge",
      "altImage": "https://www.sephora.com/productimages/sku/s2495497-av-12-zoom.jpg?imwidth=270",
      "moreColors": 6,
      "onSaleData": "NONE",
      "productId": "P455936",
      "rating": "4.3662",
      "reviews": "4113",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/summer-fridays-lip-butter-balm-P455936?skuId=2495497",
      "sponsored": false
  },
  {
      "brandName": "Saie",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Saie - Mini Glowy Super Gel Lightweight Dewy Highlighter",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$16.00",
          "skuId": "2679066",
          "skuType": "Standard"
      },
      "displayName": "Mini Glowy Super Gel Lightweight Dewy Highlighter",
      "heroImage": "https://www.sephora.com/productimages/sku/s2679066-main-zoom.jpg?imwidth=270&pb=clean-planet-positive-badge-2021",
      "altImage": "https://www.sephora.com/productimages/sku/s2679066-av-2-zoom.jpg?imwidth=270",
      "moreColors": 1,
      "onSaleData": "NONE",
      "productId": "P468207",
      "rating": "4.0773",
      "reviews": "957",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/saie-mini-glowy-super-gel-lightweight-dewy-highlighter-P468207?skuId=2679066",
      "sponsored": false
  },
  {
      "brandName": "Rare Beauty by Selena Gomez",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Rare Beauty by Selena Gomez - Kind Words Lip Liner",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$15.00",
          "skuId": "2589521",
          "skuType": "Standard"
      },
      "displayName": "Kind Words Lip Liner",
      "heroImage": "https://www.sephora.com/productimages/sku/s2589521-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2589521-av-1-zoom.jpg?imwidth=270",
      "moreColors": 9,
      "onSaleData": "NONE",
      "productId": "P500636",
      "rating": "4.5186",
      "reviews": "617",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/kind-words-lip-liner-P500636?skuId=2589521",
      "sponsored": false
  },
  {
      "brandName": "SEPHORA COLLECTION",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "SEPHORA COLLECTION - House of Lashes x Sephora Collection False Lash",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$15.00",
          "salePrice": "$5.00",
          "skuId": "2373413",
          "skuType": "Standard"
      },
      "displayName": "House of Lashes x Sephora Collection False Lash",
      "heroImage": "https://www.sephora.com/productimages/sku/s2373413-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2373413-av-01-zoom.jpg?imwidth=270",
      "onSaleData": "FULL",
      "productId": "P465813",
      "rating": "3.869",
      "reviews": "641",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/sephora-collection-house-lashes-x-sephora-collection-false-lash-P465813?skuId=2373413",
      "sponsored": false
  },
  {
      "brandName": "MILK MAKEUP",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "MILK MAKEUP - Hydro Grip Hydrating Makeup Primer with Hyaluronic Acid + Niacinamide",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$20.00 - $38.00",
          "skuId": "2169423",
          "skuType": "Standard"
      },
      "displayName": "Hydro Grip Hydrating Makeup Primer with Hyaluronic Acid + Niacinamide",
      "heroImage": "https://www.sephora.com/productimages/sku/s2169423-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019",
      "altImage": "https://www.sephora.com/productimages/sku/s2169423-av-22-zoom.jpg?imwidth=270",
      "onSaleData": "NONE",
      "productId": "P441813",
      "rating": "4.1182",
      "reviews": "6395",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/hydro-grip-primer-P441813?skuId=2169423",
      "sponsored": false
  },
  {
      "brandName": "Charlotte Tilbury",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Charlotte Tilbury - Beauty Highlighter Wand",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$42.00",
          "skuId": "2366524",
          "skuType": "Standard"
      },
      "displayName": "Beauty Highlighter Wand",
      "heroImage": "https://www.sephora.com/productimages/sku/s2366524-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2366524-av-9-zoom.jpg?imwidth=270",
      "moreColors": 5,
      "onSaleData": "NONE",
      "productId": "P444154",
      "rating": "3.7399",
      "reviews": "1111",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/glowgasm-beauty-highlighter-wand-P444154?skuId=2366524",
      "sponsored": false
  },
  {
      "brandName": "Tower 28 Beauty",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Tower 28 Beauty - BeachPlease Lip + Cheek Cream Blush",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": true,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$20.00",
          "skuId": "2711646",
          "skuType": "Standard"
      },
      "displayName": "BeachPlease Lip + Cheek Cream Blush",
      "heroImage": "https://www.sephora.com/productimages/sku/s2711646-main-zoom.jpg?imwidth=270&pb=allure-best-2021-badge",
      "altImage": "https://www.sephora.com/productimages/sku/s2711646-av-9-zoom.jpg?imwidth=270",
      "moreColors": 8,
      "onSaleData": "NONE",
      "productId": "P449342",
      "rating": "4.4901",
      "reviews": "1310",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/beachplease-tinted-balm-blush-P449342?skuId=2711646",
      "sponsored": false
  },
  {
      "brandName": "Charlotte Tilbury",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Charlotte Tilbury - Hollywood Contour Wand",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$42.00",
          "skuId": "2115954",
          "skuType": "Standard"
      },
      "displayName": "Hollywood Contour Wand",
      "heroImage": "https://www.sephora.com/productimages/sku/s2115954-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2115954-av-3-zoom.jpg?imwidth=270",
      "moreColors": 1,
      "onSaleData": "NONE",
      "productId": "P434002",
      "rating": "3.5927",
      "reviews": "933",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/hollywood-contour-wand-P434002?skuId=2115954",
      "sponsored": false
  },
  {
      "brandName": "MAKEUP BY MARIO",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "MAKEUP BY MARIO - SoftSculpt® Shaping Stick",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$32.00",
          "skuId": "2457323",
          "skuType": "Standard"
      },
      "displayName": "SoftSculpt® Shaping Stick",
      "heroImage": "https://www.sephora.com/productimages/sku/s2457323-main-zoom.jpg?imwidth=270&pb=allure-2022-bestofbeauty-badge",
      "altImage": "https://www.sephora.com/productimages/sku/s2457323-av-02-zoom.jpg?imwidth=270",
      "moreColors": 5,
      "onSaleData": "NONE",
      "productId": "P472327",
      "rating": "3.3241",
      "reviews": "904",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/makeup-by-mario-soft-sculpt-shaping-stick-P472327?skuId=2457323",
      "sponsored": false
  },
  {
      "brandName": "Kosas",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Kosas - Revealer Super Creamy + Brightening Concealer with Caffeine and Hyaluronic Acid",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$15.00 - $30.00",
          "skuId": "2333771",
          "skuType": "Standard"
      },
      "displayName": "Revealer Super Creamy + Brightening Concealer with Caffeine and Hyaluronic Acid",
      "heroImage": "https://www.sephora.com/productimages/sku/s2333771-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019",
      "altImage": "https://www.sephora.com/productimages/sku/s2333771-av-28-zoom.jpg?imwidth=270",
      "moreColors": 27,
      "onSaleData": "NONE",
      "productId": "P456151",
      "rating": "3.9619",
      "reviews": "4174",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/kosas-revealer-concealer-P456151?skuId=2333771",
      "sponsored": false
  },
  {
      "brandName": "Charlotte Tilbury",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Charlotte Tilbury - Airbrush Flawless Setting Spray",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$23.00 - $51.00",
          "skuId": "2368439",
          "skuType": "Standard"
      },
      "displayName": "Airbrush Flawless Setting Spray",
      "heroImage": "https://www.sephora.com/productimages/sku/s2368439-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2368439-av-8-zoom.jpg?imwidth=270",
      "onSaleData": "NONE",
      "productId": "P461147",
      "rating": "4.3556",
      "reviews": "1662",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/charlotte-tilbury-airbrush-flawless-setting-spray-P461147?skuId=2368439",
      "sponsored": false
  },
  {
      "brandName": "HUDA BEAUTY",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "HUDA BEAUTY - Easy Bake Loose Baking & Setting Powder",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": true,
          "listPrice": "$22.00 - $38.00",
          "skuId": "2114122",
          "skuType": "Standard"
      },
      "displayName": "Easy Bake Loose Baking & Setting Powder",
      "heroImage": "https://www.sephora.com/productimages/sku/s2114122-main-zoom.jpg?imwidth=270",
      "altImage": "https://www.sephora.com/productimages/sku/s2114122-av-22-zoom.jpg?imwidth=270",
      "moreColors": 9,
      "onSaleData": "NONE",
      "productId": "P433402",
      "rating": "4.5459",
      "reviews": "4303",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/easy-bake-loose-baking-setting-powder-P433402?skuId=2114122",
      "sponsored": false
  },
  {
      "brandName": "Tower 28 Beauty",
      "currentSku": {
          "biExclusiveLevel": "none",
          "imageAltText": "Tower 28 Beauty - SOS Daily Rescue Facial Spray",
          "isAppExclusive": false,
          "isBI": false,
          "isBest": false,
          "isFirstAccess": false,
          "isLimitedEdition": false,
          "isLimitedTimeOffer": false,
          "isNatural": false,
          "isNew": false,
          "isOnlineOnly": false,
          "isOrganic": false,
          "isSephoraExclusive": false,
          "listPrice": "$12.00 - $28.00",
          "skuId": "2527844",
          "skuType": "Standard"
      },
      "displayName": "SOS Daily Rescue Facial Spray",
      "heroImage": "https://www.sephora.com/productimages/sku/s2527844-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019",
      "altImage": "https://www.sephora.com/productimages/sku/s2527844-av-35-zoom.jpg?imwidth=270",
      "onSaleData": "NONE",
      "productId": "P448852",
      "rating": "4.0282",
      "reviews": "1771",
      "pickupEligible": false,
      "sameDayEligible": false,
      "targetUrl": "/product/sos-save-our-skin-daily-rescue-facial-spray-P448852?skuId=2527844",
      "sponsored": false
  }
]
export const HairProduct = () => {
  const [product, setproduct] = useState([]);
  const [brandfilter, setBrandFilter] = useState("ALL");
  const [priceRane, setPriceRange] = useState("0-10000");

  useEffect(() => {
    setTimeout(() => {
      setproduct(sephoraData)
    },1000)
  }, []);

  const getdata = async () => {
    fetch(`https://sephoramasaiapi.herokuapp.com/hair`)
      .then((d) => d.json())
      .then((data) => {
        setproduct(data);
      });
  };

  const handelSort = (by) => {
    if (by === "PLH") {
      let sorted = product.sort((a, b) => {
        return a.brandName.localeCompare(b.brandName);
      });
      let newData = [...sorted];
      setproduct(newData);
    } else if (by === "PHL") {
      let sorted = product.sort((a, b) => {
        return b.brandName.localeCompare(a.brandName);
      });
      let newData = [...sorted];
      setproduct(newData);
    } else if (by === "POP") {
      let sorted = product.sort((a, b) => {
        return parseInt(a.rating) - parseInt(b.rating);
      });
      let newData = [...sorted];
      setproduct(newData);
    }
    else {
      setproduct(sephoraData) 
    }
  };

  const dobrandFilter = (product) => {
    if (brandfilter == "ALL") {
      return true;
    } else {
      if (brandfilter === product.brandname) {
        return true;
      }
    }
  };

  const priceRaneFilter = (product) => {
    if (priceRane === "0-10000") {
      return true;
    } else if (priceRane === "0-1000") {
      if (product.price >= 0 && product.price <= 1000) {
        return true;
      }
    } else if (priceRane === "1001-2000") {
      if (product.price >= 1001 && product.price <= 2000) {
        return true;
      }
    } else if (priceRane === "2001-3000") {
      if (product.price >= 2001 && product.price <= 3000) {
        return true;
      }
    } else if (priceRane === "3001-4000") {
      if (product.price >= 3001 && product.price <= 4000) {
        return true;
      }
    } else if (priceRane === "4001-5000") {
      if (product.price >= 4001 && product.price <= 5000) {
        return true;
      }
    } else if (priceRane === "5001-6000") {
      if (product.price >= 5001 && product.price <= 6000) {
        return true;
      }
    } else if (priceRane === "6001-10000") {
      if (product.price >= 6001 && product.price <= 10000) {
        return true;
      }
    }
  };

  return (
    <>
    <Header/>
    <Navbar/>
      <div id="sortdiv">
        <p>SORT:</p>
        <select
          id="itemsorter"
          onChange={(e) => {
            handelSort(e.target.value);
          }}
        >
          <option value="Clear">Sort</option>
          <option value="PLH">Sort: A to Z</option>
          <option value="PHL">Sort: Z to A</option>
          <option value="POP">Popularity</option>
        </select>
      </div>

      <div id="MainContainer">
        <div id="leftNavigation">
          <div id="leftNav">
            <b className="navcat">CATEGORY</b>

            <div id="checkboxcss">
              <div id="ckeckboxdiv">
                <input type="checkbox" id="bye" />
                <span>Perfume (294)</span>
              </div>
              <div id="ckeckboxdiv">
                <input type="checkbox" />
                <span>Deodorant (6)</span>
              </div>
            </div>
            <div id="checkboxcss">
              <div id="ckeckboxdiv">
                <input type="checkbox" />
                <span>New Arrivals (7)</span>
              </div>
              <div id="ckeckboxdiv">
                <input type="checkbox" />
                <span>On Sale (22)</span>
              </div>
            </div>

            <p className="navfilter">FILTER BY</p>
            <div id="btn">
            <button><span>Brand</span>
                <b></b></button>
              <button><span>Price</span>
                <b></b></button>
              <button>
                <span>Size</span>
                <b></b>
              </button>
              <button>
                <span>Color</span>
                <b></b>
              </button>
              <button>
                <span>Promotion</span>
                <b></b>
              </button>
              <button>
                <span>Store</span>
                <b></b>
              </button>
            </div>
          </div>
        </div>
        {product.length==0 ? <h1 style={{color:"grey", marginLeft: "150px"}}>
         Please Wait ...
              </h1> :
        <div id="productpagecart">
          {product
            .filter(dobrandFilter)
            .filter(priceRaneFilter)
            .map((e) => (
              <div
                id="productCard"
                key={e.productName}
                onClick={(event) => {
                  let arr=[]
                  arr.push(e)
                  localStorage.setItem("hemant", JSON.stringify(arr));
                }}
              >
                
                <ProductCard Product={product}>
                  <div id="imgDiv">
                  <Link to={`/productdetail`}>
                  <img src={e.heroImage} id="productimg1" />
                    <img src={e.altImage || e.heroImage} id="productimg2" />
                    </Link>
                    <div id="Scrollup_Button">
                      <button
                        onClick={(event) => {
                          alert('added in cart')
                          var cartArr =
                            JSON.parse(localStorage.getItem("sai")) ||
                            [];
                          cartArr.push(e);
                          localStorage.setItem(
                            "sai",
                            JSON.stringify(cartArr)
                          );
                        }}
                      >
                        <HiOutlineShoppingBag id="symbollcss"></HiOutlineShoppingBag>
                        <span id="textCSS">ADD TO CART</span>
                      </button>
                      <button
                        // onClick={(event) => {
                        //   var wishlistArr =
                        //     JSON.parse(
                        //       localStorage.getItem("sephorawishlist")
                        //     ) || [];
                        //   wishlistArr.push(e);
                        //   localStorage.setItem(
                        //     "sephorawishlist",
                        //     JSON.stringify(wishlistArr)
                        //   );
                        // }}
                      >
                        <MdFavoriteBorder id="symbollcss"></MdFavoriteBorder>
                        <span id="textCSS">FAVOURITE</span>
                      </button>
                    </div>
                  </div>
                  <Link to={`/productdetail`} style={{textDecoration: "none"}}>
                  <div>
                  <p>{e.brandName}</p>
                    <p>{e.displayName}</p>
                    <p>{e.currentSku.listPrice}</p>
                  </div>
                  </Link>
                </ProductCard>
                
              </div>
            ))}
        </div>}
      </div>
                      
      <Footer/>
    </>
  );
};
