# Contributing

This is for spriting. There are no current guidelines for the JS core.

## Basic Guidelines

#### Use an RGBA-compatible image editor.
Personally, I use [Krita](https://krita.org/en/), as it allows for multi-layer sprite handling.
For Windows users, I'd recommend [paint.net](https://getpaint.net), being a debatably more powerful tool than MS Paint with extensive plugin support, as well as multi-layer sprite handling.

#### Always test your changes.
Do not submit something without first running the game to see if Mindustry throws an error, or if the sprite is misaligned. This one should be self-explanatory.
If you're adding a new block, make sure that all of its variants (preview, different sprite sizes, main sprite) are correctly imported.

## Style Guidelines

Sprites are saved as .png files, with their sizes corresponding to Mindustry's vanilla counterparts. However, the actual features of sprites are precisely 4x smaller (base resolutions rounding up to multiples of 4) than normally, and are upscaled using nearest neighbour interpolation.
In the case of 3.5-based sprites, there are also colour restrictions. This means you'll need to look at [this release's](https://github.com/Anuken/Mindustry/tree/v40) palette, and change colours accordingly. It is advised to reuse similiar colours, for example, gray colours could be based on the router.

Lastly, some important information regarding base style for new blocks. You must check these versions, in order, for similiar blocks to be reused, as well as contact me via Discord (BasedUser#2215, preferred method) or via email (**undefinedvoid@yandex.ru**).
- [3.5b40](https://github.com/Anuken/Mindustry/tree/v40) (if designing for the 3.5 branch)
- [4.0b52a](https://github.com/Anuken/Mindustry/tree/v52) (b53 onwards uses a blue palette)
- [4.0b63a](https://github.com/Anuken/Mindustry/tree/v63) (b64 onwards uses a different artstyle, based on scale4x)
- [4.0b76b](https://github.com/Anuken/Mindustry/tree/v76) (b77 onwards uses properly upscaled sprites)
- [5.0b104.10](https://github.com/Anuken/Mindustry/tree/v104.6) (changes after b104.10 are undocumented, proceed with caution)
