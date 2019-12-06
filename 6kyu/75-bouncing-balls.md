### Problem:
<p>A child is playing with a ball on the nth floor of a tall building.
The height of this floor, <em>h</em>, is known. </p>
<p>He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).</p>
<p>His mother looks out of a window 1.5 meters from the ground.</p>
<p>How many times will the mother see the ball pass in front of her window (including when it&apos;s falling <em>and</em> bouncing?</p>
<h2 id="three-conditions-must-be-met-for-a-valid-experiment">Three conditions must be met for a valid experiment:</h2>
<ul>
<li>Float parameter &quot;h&quot; in meters must be greater than 0</li>
<li>Float parameter &quot;bounce&quot; must be greater than 0 and less than 1</li>
<li>Float parameter &quot;window&quot; must be less than h.</li>
</ul>
<p><strong>If all three conditions above are fulfilled, return a positive integer, otherwise return -1.</strong></p>
<h3 id="note">Note:</h3>
<p>The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.</p>
<h3 id="example">Example:</h3>
<pre><code>- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).</code></pre>
### Solution