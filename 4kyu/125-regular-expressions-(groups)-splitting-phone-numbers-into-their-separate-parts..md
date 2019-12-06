### Problem:
<p>With regular expressions you can find information and even split the found information into parts.
This will be a recognition test, although it is important to know how regular expression groups work.</p>
<p>The assignment will be to create a regular expression that will match with (dutch) phone numbers.</p>
<p>These phone numbers can be written multiple ways:</p>
<ul>
<li><code>0012 34 567890</code>: is how you would dial a number in another nation using the <a href="https://en.wikipedia.org/wiki/List_of_international_call_prefixes" target="_blank">ITU-recommendation</a> (which is the <code>00</code> or <code>+</code> prefix. Note that countries do not follow these recommendations, as for Japan: <code>010</code>. This will not be tested)</li>
<li><code>+12 34 567890</code>: a more readable shorter version</li>
<li><code>034 567890</code>: is how you would dial a number in the same nation</li>
<li><code>567890</code>: is how you would dial a number in the same area</li>
</ul>
<p>These phone numbers can be split up into a nation code (without prefix), an area code with 2 digits (with the leading <code>0</code> if it&apos;s at the beginning of the whole number) and the local number.  </p>
<p>The regular expression should only contain these three caught groups and anything in a format other than shown in the examples above should not result in a match. Especially, considere these additionnal rules:</p>
<p>The nation code, area code and local number may never contain a 0 at the start unless it is the prefix for dialing out of the country or it is at the beginning of the area code if there is no country code. Some examples of invalid codes because of this rule:<br></p>
<ul>
<li><code>0001 34 567890</code></li>
<li><code>+01 34 567890</code></li>
<li><code>+12 04 567890</code></li>
<li><code>+12 034 567890</code></li>
<li><code>+12 34 067895</code></li>
<li><code>034 067895</code></li>
<li><code>001 567890</code></li>
<li><code>098765</code></li>
</ul>
<p>Good luck.</p>
<p>The validation tests will display the number with which it fails, but not the details. Do not hesitate to add your own example tests.</p>

### Solution