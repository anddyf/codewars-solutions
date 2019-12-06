### Problem:
<p>Consider a &quot;word&quot; as any sequence of capital letters A-Z (not limited to just &quot;dictionary words&quot;). For any word with at least two different letters, there are other words composed of the same letters but in a different order (for instance, STATIONARILY/ANTIROYALIST, which happen to both be dictionary words; for our purposes &quot;AAIILNORSTTY&quot; is also a &quot;word&quot; composed of the same letters as these two).</p>
<p>We can then assign a number to every word, based on where it falls in an alphabetically sorted list of all words made up of the same group of letters. One way to do this would be to generate the entire list of words and find the desired one, but this would be slow if the word is long.</p>
<p>Given a word, return its number. Your function should be able to accept any word 25 letters or less in length (possibly with some letters repeated), and take no more than 500 milliseconds to run. To compare, when the solution code runs the 27 test cases in JS, it takes 101ms.</p>
<p>For very large words, you&apos;ll run into number precision issues in JS (if the word&apos;s position is greater than 2^53). For the JS tests with large positions, there&apos;s some leeway (.000000001%). If you feel like you&apos;re getting it right for the smaller ranks, and only failing by rounding on the larger, submit a couple more times and see if it takes.</p>
<p>Python, Java and Haskell have arbitrary integer precision, so you must be precise in those languages (unless someone corrects me).</p>
<p>C# is using a <code>long</code>, which may not have the best precision, but the tests are locked so we can&apos;t change it.</p>
<p>Sample words, with their rank:<br>
ABAB = 2<br>
AAAB = 1<br>
BAAA = 4<br>
QUESTION = 24572<br>
BOOKKEEPER = 10743</p>

### Solution