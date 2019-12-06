### Problem:
<h1 id="largest-rectangle-in-background">Largest Rectangle in Background</h1>
<p>Imagine a photo taken to be used in an advertisement. The background on the left of the motive is whitish and you want to write some text on that background. So you scan the photo with a high resolution scanner and, for each line, count the number of pixels from the left that are sufficiently white and suitable for being written on. Your job is to find the area of the largest text box you can place on those pixels.</p>
<p>Example:
In the figure below, the whitish background pixels of the scanned photo are represented by asterisks.</p>
<pre><code>*********************************
*********
*******
******
******
******
**************
**************
**************
***************
*********************
</code></pre><p>If you count the pixels on each line from the left you get the list (or array, depending on which language you are using) <code>[33, 9, 7, 6, 6, 6, 14, 14, 14, 15, 21]</code>. The largest reactangle that you can place on these pixels has an area of 70, and is represented by the dots in the figure below.</p>
<pre><code>*********************************
*********
*******
******
******
******
..............
..............
..............
..............*
..............*******</code></pre><p>Write a function that, given a list of the number whitish pixels on each line in the background, returns the area of the largest rectangle that fits on that background.</p>

### Solution