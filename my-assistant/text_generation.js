/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager, FileState } from "@google/generative-ai/server";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const mediaPath = __dirname + "/media";

async function textGenTextOnlyPrompt() {
  // [START text_gen_text_only_prompt]
  // Make sure to include these imports:
  // import { GoogleGenerativeAI } from "@google/generative-ai";
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  //gemini-1.5-pro
  //gemini-1.5-flash
  //gemini-1.5-pro-002
  //gemini-1.5-flash-002

  //const prompt = "Write a story about a magic backpack.";
  const prompt = "write it in a better paragraph great place to work.";
  /*const prompt = "write it in a better paragraph R15 v4 review if you were to come up with a list of motorcycles that have remained immensely popular ever since they\'ve been launched in India the Yamaha YZF R15 would figure prominently on it in fact every time that Yamaha has launched a new version we\'ve all sat up and taken notice today we\'ve got version four of yamaha\'s fabled R15 so without further Ado let\'s hop onto this motorcycle and take it out for a ride  but before we fire up that engine let\'s just soak in the new r15s design because it certainly looks even better than what the picture suggest as has been the case with the r15s of your version 4.0 takes its design cues from a bigger Yamaha R series motorcycle this time around it is the new R7 I think this is the best looking R15 to date and this new R7 inspired design looks very proportionate on this Motorcycle Plus I\'m a big fan of the new face the front end looks sharp with the bifunctional LED projector headlight sitting inside the 4 air intake the LED position lights that flang the headlamp adds to the aggressive face slotted\n"
 +"above the front fairing is a new wind screen that shape very well to Shield you from head-on wind Yamaha claims this fairing is more aerodynamic helping it achieve its near 150 kph top speed with a little more ease the side fairing flows neatly with the rest of the bike and I love our test bike\'s Racing blue paint work with the dual tone matte and gloss effect the fuel tank is new chunkier and is shaped to offer more purchase for your knees to grab onto the tank capacity however is the same as the version 3 at 11 L the tail section again is reminiscent of the r7\'s floating panels and on the whole this is one good looking motorcycle it certainly managed to attract a lot of eyeballs everywhere we went the only jarring element is that the angle of the exhaust doesn\'t match the angle of the tail in the past we\'ve complained about the R15 version 3\'s non- Yamaha like quality levels and thankfully the company has listen to feedback in the version 4 there is a marked improvement in the quality levels beat\n"
+"in the switch gear these plastic panels over here or this lovely paint finish this is what yamama quality should be like in terms of features the R15 version 4 gets a new LCD display with Bluetooth connectivity for phone SMS and email notifications but there is no navigation functionality yamaha\'s proprietary yconnect app offers more information such as last Park location and fuel consumption data the display also switches to track mode that shows your current and best lap time on a racetrack now that we\'ve had a brief introduction to the new R15 let\'s hop on the motorcycle and see what the riding position is like the clipon handlebars on this motorcycle are placed below the tri t instead of above it as was the case in the version 3 now you might think that that would result in a very committed riding position but that is not the case because of the way these clipons are shaped in fact this handlebar position feels only a tad lower than that on the version 3 motorcycle what I also like is the way this tank has been shaped and the\n"
+"profile of the seat which puts you in this locked in position so overall I really like this new riding position you\'ll also notice that the new seat is comfier and has a Slimmer profile towards the tank and it\'s at the same 88115 mm height as the previous bike while the seat certainly feels different the position of the foot PEX doesn\'t seem to have changed the end result is a properly sporty riding position without being too extreme that being said bear in mind that the super cool looking racer boy/girl riding position isn\'t suited for Long Highway stins and now let\'s get to one of my favorite bits about this motorcycle the engine because this fourwh single is the star of the YZF R15 5 show and undoubtedly one of the best small capacity motorcycle engines out there even if it makes slightly less power despite the minuscule drop in Peak horsepower there\'s no perceptible difference in performance this motorcycle still feels as fast as ever and I love this engine\'s eager to rev nature and this thing is on song post 7,000 RPM the engine\n"
 +"is delightfully free revving reactable at low speeds for ease of riding in the city and the variable valve actuation or vva gives you that exciting extra topend surge on the open road not only does this engine make slightly more talk than the version 3\'s engine but it also Peaks at 1,000 rpm lower than that engine we\'ve not had the time to strap on a vbox testing equipment so we can\'t really tell you about the true acceleration figures but on the basis of Feld alone this maybe a slightly quicker motorcycle than the R15 version 3 a bike came with the optional up only quick shifter and it works smoothly but you can only use it in track mode now considering the fact that this engine is largely the same as before and the motorcycle\'s curve weight remains unchanged at 142 kilos the fuel economy should be around the same ballpark for reference the R15 version 3 return 37.2 kpl in the city and nearly 50 kpl on the highway but over and above the engine what has forever remained a Hallmark of the R15 is its handling and the version 4 continues in the\n"
  +"same ve the Indian bike finally gets a non-adjustable USD Fork although the inner diameter of the tubes at 37 mm is smaller than the 41 mm folk on the version 3 motorcycle that said the inherently greater rigidity of a USD folk versus a conventional folk should bring in improved stability especially while charging through a corner or breaking hard other chassis modifications include a reinforced subframe this coupled with a proven Delta box frame that\'s been carried forward comes together to offer a sweet handling package the feedback from the front end is clear and you never left wondering what this motorcycle is up to once it\'s tipped into a corner in fact throughout Corner this thing remains planted and stable and it\'s also very forgiving which makes it an awesome beginner friendly motorcycle all that handling finess hasn\'t come at the expense of right quality and the bike also does a decent job of tackling most Road mperfections Yamaha has also thrown in a traction control system with the version 4.0 some of you may think that this is a needless\n"
   +"excess for a bike that makes under 20 horsepower however knowing how slippery and shorty a road skin be safety systems such as this are always welcome the braking components are the same as before and there are no complaints here whether in terms of bite or feedback from the lever with the new design and feature updates the venerable R15 gets a near 10 to 15,000 indian rupee price hike over the outgoing version depending on the colors and the previous version itself has received numerous price hikes in the recent past spend a little more money and you can buy the yah Moto GP team liard bike or the r15m the latter gets you a delectable silver paint Scheme silver swing arm gold brake calipers and aesthetically different seats it also gets the quick shifter as standard despite the higher asking price for this motorcycle I think it is money well spent because there are very few motorcycles that can make you feel the\n"
+"way this motorcycle does especially if you are an enthusiast so it is safe to say that the popularity of the wif R15 will remain intact but it also Peaks at 1,000 rpm lower than that engine now we Haden had the time we haven\'t had the time maybe we didn\'t have the time I think this is the best looking R15 to date and the new R7 inspired design looks very proportionate plus I\'m a big fan of the new front oh new face go";
*/
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  // [END text_gen_text_only_prompt]
}

async function textGenTextOnlyPromptStreaming() {
  // [START text_gen_text_only_prompt_streaming]
  // Make sure to include these imports:
  // import { GoogleGenerativeAI } from "@google/generative-ai";
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  //const prompt = "Write a story about a magic backpack.";
  
  const result = await model.generateContentStream(prompt);

  // Print text as it comes in.
  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    process.stdout.write(chunkText);
  }
  // [END text_gen_text_only_prompt_streaming]
}

async function textGenMultimodalOneImagePrompt() {
  // [START text_gen_multimodal_one_image_prompt]
  // Make sure to include these imports:
  // import { GoogleGenerativeAI } from "@google/generative-ai";
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  function fileToGenerativePart(path, mimeType) {
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
        mimeType,
      },
    };
  }

  const prompt = "Describe how this product might be manufactured.";
  // Note: The only accepted mime types are some image types, image/*.
  const imagePart = fileToGenerativePart(
    `${mediaPath}/jetpack.jpg`,
    "image/jpeg",
  );

  const result = await model.generateContent([prompt, imagePart]);
  console.log(result.response.text());
  // [END text_gen_multimodal_one_image_prompt]
}

async function textGenMultimodalOneImagePromptStreaming() {
  // [START text_gen_multimodal_one_image_prompt_streaming]
  // Make sure to include these imports:
  // import { GoogleGenerativeAI } from "@google/generative-ai";
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  function fileToGenerativePart(path, mimeType) {
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
        mimeType,
      },
    };
  }

  const prompt = "Describe how this product might be manufactured.";
  // Note: The only accepted mime types are some image types, image/*.
  const imagePart = fileToGenerativePart(
    `${mediaPath}/jetpack.jpg`,
    "image/jpeg",
  );

  const result = await model.generateContentStream([prompt, imagePart]);

  // Print text as it comes in.
  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    process.stdout.write(chunkText);
  }
  // [END text_gen_multimodal_one_image_prompt_streaming]
}

async function textGenMultimodalMultiImagePrompt() {
  // [START text_gen_multimodal_multi_image_prompt]
  // Make sure to include these imports:
  // import { GoogleGenerativeAI } from "@google/generative-ai";
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  function fileToGenerativePart(path, mimeType) {
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
        mimeType,
      },
    };
  }

  const prompt =
    "Write an advertising jingle showing how the product in the" +
    " first image could solve the problems shown in the second two images.";

  // Note: The only accepted mime types are some image types, image/*.
  const imageParts = [
    fileToGenerativePart(`${mediaPath}/jetpack.jpg`, "image/jpeg"),
    fileToGenerativePart(`${mediaPath}/piranha.jpg`, "image/jpeg"),
    fileToGenerativePart(`${mediaPath}/firefighter.jpg`, "image/jpeg"),
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  console.log(result.response.text());
  // [END text_gen_multimodal_multi_image_prompt]
}

async function textGenMultimodalMultiImagePromptStreaming() {
  // [START text_gen_multimodal_multi_image_prompt_streaming]
  // Make sure to include these imports:
  // import { GoogleGenerativeAI } from "@google/generative-ai";
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  function fileToGenerativePart(path, mimeType) {
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
        mimeType,
      },
    };
  }

  const prompt =
    "Write an advertising jingle showing how the product in the" +
    " first image could solve the problems shown in the second two images.";

  // Note: The only accepted mime types are some image types, image/*.
  const imageParts = [
    fileToGenerativePart(`${mediaPath}/jetpack.jpg`, "image/jpeg"),
    fileToGenerativePart(`${mediaPath}/piranha.jpg`, "image/jpeg"),
    fileToGenerativePart(`${mediaPath}/firefighter.jpg`, "image/jpeg"),
  ];

  const result = await model.generateContentStream([prompt, ...imageParts]);

  // Print text as it comes in.
  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    process.stdout.write(chunkText);
  }
  // [END text_gen_multimodal_multi_image_prompt_streaming]
}

async function textGenMultimodalAudio() {
  // [START text_gen_multimodal_audio]
  // Make sure to include these imports:
  // import { GoogleGenerativeAI } from "@google/generative-ai";
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  function fileToGenerativePart(path, mimeType) {
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
        mimeType,
      },
    };
  }

  const prompt = "Give me a summary of this audio file.";
  // Note: The only accepted mime types are some image types, image/*.
  const audioPart = fileToGenerativePart(
    `${mediaPath}/samplesmall.mp3`,
    "audio/mp3",
  );

  const result = await model.generateContent([prompt, audioPart]);
  console.log(result.response.text());
  // [END text_gen_multimodal_audio]
}

async function textGenMultimodalVideoPrompt() {
  // [START text_gen_multimodal_video_prompt]
  // Make sure to include these imports:
  // import { GoogleGenerativeAI } from "@google/generative-ai";
  // import { GoogleAIFileManager, FileState } from "@google/generative-ai/server";
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const fileManager = new GoogleAIFileManager(process.env.API_KEY);

  const uploadResult = await fileManager.uploadFile(
    `${mediaPath}/Big_Buck_Bunny.mp4`,
    { mimeType: "video/mp4" },
  );

  let file = await fileManager.getFile(uploadResult.file.name);
  while (file.state === FileState.PROCESSING) {
    process.stdout.write(".");
    // Sleep for 10 seconds
    await new Promise((resolve) => setTimeout(resolve, 10_000));
    // Fetch the file from the API again
    file = await fileManager.getFile(uploadResult.file.name);
  }

  if (file.state === FileState.FAILED) {
    throw new Error("Video processing failed.");
  }

  const prompt = "Describe this video clip";
  const videoPart = {
    fileData: {
      fileUri: uploadResult.file.uri,
      mimeType: uploadResult.file.mimeType,
    },
  };

  const result = await model.generateContent([prompt, videoPart]);
  console.log(result.response.text());
  // [END text_gen_multimodal_video_prompt]
  await fileManager.deleteFile(uploadResult.file.name);
}

async function textGenMultimodalVideoPromptStreaming() {
  // [START text_gen_multimodal_video_prompt_streaming]
  // Make sure to include these imports:
  // import { GoogleGenerativeAI } from "@google/generative-ai";
  // import { GoogleAIFileManager, FileState } from "@google/generative-ai/server";
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const fileManager = new GoogleAIFileManager(process.env.API_KEY);

  const uploadResult = await fileManager.uploadFile(
    `${mediaPath}/Big_Buck_Bunny.mp4`,
    { mimeType: "video/mp4" },
  );

  let file = await fileManager.getFile(uploadResult.file.name);
  while (file.state === FileState.PROCESSING) {
    process.stdout.write(".");
    // Sleep for 10 seconds
    await new Promise((resolve) => setTimeout(resolve, 10_000));
    // Fetch the file from the API again
    file = await fileManager.getFile(uploadResult.file.name);
  }

  if (file.state === FileState.FAILED) {
    throw new Error("Video processing failed.");
  }

  const prompt = "Describe this video clip";
  const videoPart = {
    fileData: {
      fileUri: uploadResult.file.uri,
      mimeType: uploadResult.file.mimeType,
    },
  };

  const result = await model.generateContentStream([prompt, videoPart]);
  // Print text as it comes in.
  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    process.stdout.write(chunkText);
  }
  // [END text_gen_multimodal_video_prompt_streaming]
  await fileManager.deleteFile(uploadResult.file.name);
}

async function runAll() {
  // Comment out or delete any sample cases you don't want to run.
  await textGenTextOnlyPrompt();
  // await textGenTextOnlyPromptStreaming();
  //await textGenMultimodalOneImagePrompt();
  // await textGenMultimodalOneImagePromptStreaming();
  // await textGenMultimodalMultiImagePrompt();
  // await textGenMultimodalMultiImagePromptStreaming();
  // await textGenMultimodalAudio();
  // await textGenMultimodalVideoPrompt();
  // await textGenMultimodalVideoPromptStreaming();
}


export let handlePostStore = async (data) => {
  // [START text_gen_text_only_prompt]
  // Make sure to include these imports:
  // import { GoogleGenerativeAI } from "@google/generative-ai";
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  //gemini-1.5-pro
  //gemini-1.5-flash

  //const prompt = "Write a story about a magic backpack.";
  const result = await model.generateContent(data);
  //console.log(result.response.text());
  // [END text_gen_text_only_prompt]
  return result.response.text();
};


//runAll();
