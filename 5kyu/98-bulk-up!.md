### Problem:
<p><font>You&apos;ve been going to the gym for some time now and recently you started taking care of your nutrition as well. You want to gain some weight but who wants to bother counting calories every day. It said somewhere that protein is the foundation of building muscle, so let&apos;s try to calculate the total amount of calories and proteins we take in.</font></p>
<h2>Task:</h2>
<font>Given an array of meals where each element is a string in the form <code>&apos;300g turkey, 300g potatoes, 100g cucumber&apos;</code> find out how many proteins and calories you consumed. You like to keep things simple so all values will be expressed in grams. In case you didn&apos;t know every gram of protein and carbohydrate has 4 calories, while 1 gram of fat provides 9 calories. <br>An object <b><i>food</i></b>&#xA0;(in Ruby <b><i>$food</i></b>&#xA0;) is preloaded for you that contains the information about the given food <b>per 100 grams</b>:</font>

<pre><code class="language-javascript"><span class="hljs-keyword">var</span> food = { 
  <span class="hljs-attr">chicken</span>: [<span class="hljs-number">20</span>, <span class="hljs-number">5</span>, <span class="hljs-number">10</span>], <span class="hljs-comment">//per 100g chicken has 20g of protein, 5 grams of carbohydrates and 10 grams of fat.</span>
  <span class="hljs-attr">eggs</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">5</span>, <span class="hljs-number">15</span>], <span class="hljs-comment">//protein:10g , carbs:5g , fats: 15g</span>
  <span class="hljs-attr">salmon</span>: [<span class="hljs-number">27</span>, <span class="hljs-number">0</span>, <span class="hljs-number">10</span>], 
  <span class="hljs-attr">beans</span>: [<span class="hljs-number">8</span>, <span class="hljs-number">25</span>, <span class="hljs-number">0</span>], 
  <span class="hljs-attr">bananas</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">23</span>, <span class="hljs-number">0</span>], 
  ... 
  ... 
}</code></pre>
<pre style="display: none;"><code class="language-ruby">$food = { 
  <span class="hljs-string">&quot;chicken&quot;</span> =&gt; [<span class="hljs-number">20</span>, <span class="hljs-number">5</span>, <span class="hljs-number">10</span>], <span class="hljs-comment"># per 100g chicken has 20g of protein, 5 grams of carbohydrates and 10 grams of fat.</span>
  <span class="hljs-string">&quot;eggs&quot;</span> =&gt; [<span class="hljs-number">10</span>, <span class="hljs-number">5</span>, <span class="hljs-number">15</span>],    <span class="hljs-comment"># protein:10g , carbs:5g , fats: 15g</span>
  <span class="hljs-string">&quot;salmon&quot;</span> =&gt; [<span class="hljs-number">27</span>, <span class="hljs-number">0</span>, <span class="hljs-number">10</span>], 
  <span class="hljs-string">&quot;beans&quot;</span> =&gt; [<span class="hljs-number">8</span>, <span class="hljs-number">25</span>, <span class="hljs-number">0</span>], 
  <span class="hljs-string">&quot;bananas&quot;</span> =&gt; [<span class="hljs-number">1</span>, <span class="hljs-number">23</span>, <span class="hljs-number">0</span>], 
  ... 
  ... 
}</code></pre>
<pre style="display: none;"><code class="language-python">food = { 
  <span class="hljs-string">&quot;chicken&quot;</span>: [<span class="hljs-number">20</span>, <span class="hljs-number">5</span>, <span class="hljs-number">10</span>], <span class="hljs-comment"># per 100g chicken has 20g of protein, 5 grams of carbohydrates and 10 grams of fat.</span>
  <span class="hljs-string">&quot;eggs&quot;</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">5</span>, <span class="hljs-number">15</span>],    <span class="hljs-comment"># protein:10g , carbs:5g , fats: 15g</span>
  <span class="hljs-string">&quot;salmon&quot;</span>: [<span class="hljs-number">27</span>, <span class="hljs-number">0</span>, <span class="hljs-number">10</span>], 
  <span class="hljs-string">&quot;beans&quot;</span>: [<span class="hljs-number">8</span>, <span class="hljs-number">25</span>, <span class="hljs-number">0</span>], 
  <span class="hljs-string">&quot;bananas&quot;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">23</span>, <span class="hljs-number">0</span>], 
  ... 
  ... 
}</code></pre>
<p>Round your results to 2 decimal places and return a string in the form <code>&quot;Total proteins: n grams, Total calories: n&quot;</code>.<br>
Delete all trailing zeros on every float and remove trailing point if the result is an integer.
<font>Note: <b>No invalid input testing.</b></font></p>
<h3><font color="#25B6CC">Have fun!</font></h3>

<pre><code class="language-javascript">                _....----&quot;&quot;&quot;----...._
             .-&apos;  o    o    o    o   &apos;-.
            /  o    o    o         o    \
           /     o      o   o     o    o \
         _|   o   o    o      o  o     o  |_
        / `&apos;&apos;-----.................-----&apos;&apos;` \
        \___________________________________/
          \~`-`.__.`-~`._.~`-`~.-~.__.~`-`/
           \                             /
            `-._______________________.-&apos;

            //lonely burger passing by</code></pre>

### Solution