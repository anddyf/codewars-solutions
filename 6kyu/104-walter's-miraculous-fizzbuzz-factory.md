### Problem:
<h1 id="the-fizzbuzz-factory">The FizzBuzz factory</h1>
<p>Walter was a normal engineer. He built FizzBuzz functions every day. You might have <a href="https://en.wikipedia.org/wiki/Fizz_buzz" target="_blank">heard of them</a>. They return &quot;Fizz&quot;, if your number is divisible by 3, &quot;Buzz&quot;, if your number is divisible by 5, and &quot;FizzBuzz&quot; if your number is divisible by, well, both. For all other, boring numbers, the number itself was returned (but as a string, since Walter cared about types).</p>
<p>However, those machines were so practical and beneficial to the whole society, that everyone copied Walter&apos;s machines. So he came up with a new idea: he would sell a personal FizzBuzz factory! That would bring his competitors out of business!</p>
<h1 id="task">Task</h1>
<p>In this kata, you will get an array of unique numbers, paired with strings, like</p>
<pre><code>[(3, &quot;Fizz&quot;), (5, &quot;Buzz&quot;), (15, &quot;FizzBuzz&quot;)]</code></pre><p>Depending on the language, that&apos;s either a list/array of tuples or an array of arrays. It&apos;s always sorted.</p>
<p>Your job is to return another function, that&#x2014;given a number <code>n</code>&#x2014;returns the appropriate string. How do you know the correct string? Well, it&apos;s the one paired with the largest key that still divides the number <code>n</code>!</p>
<h2 id="examples">Examples</h2>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-keyword">var</span> myFizz = fizzBuzzFactory([[<span class="hljs-number">3</span>, <span class="hljs-string">&quot;Fizz&quot;</span>], [<span class="hljs-number">5</span>, <span class="hljs-string">&quot;Buzz&quot;</span>], [<span class="hljs-number">15</span>, <span class="hljs-string">&quot;FizzBuzz&quot;</span>]])
myFizz(<span class="hljs-number">3</span>)  === <span class="hljs-string">&quot;Fizz&quot;</span>
myFizz(<span class="hljs-number">4</span>)  === <span class="hljs-string">&quot;4&quot;</span>
myFizz(<span class="hljs-number">5</span>)  === <span class="hljs-string">&quot;Buzz&quot;</span>
myFizz(<span class="hljs-number">15</span>) === <span class="hljs-string">&quot;FizzBuzz&quot;</span>

<span class="hljs-keyword">var</span> myFooBar = fizzBuzzFactory([[<span class="hljs-number">2</span>, <span class="hljs-string">&quot;Foo&quot;</span>], [<span class="hljs-number">4</span>, <span class="hljs-string">&quot;Bar&quot;</span>], [<span class="hljs-number">6</span>, <span class="hljs-string">&quot;FooBar&quot;</span>]])
myFooBar(<span class="hljs-number">1</span>)  === <span class="hljs-string">&quot;1&quot;</span>
myFooBar(<span class="hljs-number">2</span>)  === <span class="hljs-string">&quot;Foo&quot;</span>
myFooBar(<span class="hljs-number">4</span>)  === <span class="hljs-string">&quot;Bar&quot;</span>
myFooBar(<span class="hljs-number">6</span>)  === <span class="hljs-string">&quot;FooBar&quot;</span>
myFooBar(<span class="hljs-number">8</span>)  === <span class="hljs-string">&quot;Bar&quot;</span>
myFooBar(<span class="hljs-number">10</span>) === <span class="hljs-string">&quot;Foo&quot;</span>
myFooBar(<span class="hljs-number">12</span>) === <span class="hljs-string">&quot;FooBar&quot;</span></code></pre>
<pre><code class="language-haskell"><span class="hljs-title">let</span> myFizz = fizzBuzzFactory [(<span class="hljs-number">3</span>, <span class="hljs-string">&quot;Fizz&quot;</span>), (<span class="hljs-number">5</span>, <span class="hljs-string">&quot;Buzz&quot;</span>), (<span class="hljs-number">15</span>, <span class="hljs-string">&quot;FizzBuzz&quot;</span>)]
<span class="hljs-title">myFizz</span> <span class="hljs-number">3</span> `shouldBe` <span class="hljs-string">&quot;Fizz&quot;</span>
<span class="hljs-title">myFizz</span> <span class="hljs-number">4</span> `shouldBe` <span class="hljs-string">&quot;4&quot;</span>
<span class="hljs-title">myFizz</span> <span class="hljs-number">5</span> `shouldBe` <span class="hljs-string">&quot;Buzz&quot;</span>
<span class="hljs-title">myFizz</span> <span class="hljs-number">15</span> `shouldBe` <span class="hljs-string">&quot;FizzBuzz&quot;</span>    
<span class="hljs-title">myFizz</span> <span class="hljs-number">30</span> `shouldBe` <span class="hljs-string">&quot;FizzBuzz&quot;</span>
<span class="hljs-title">myFizz</span> <span class="hljs-number">31</span> `shouldBe` <span class="hljs-string">&quot;31&quot;</span>

<span class="hljs-title">let</span> myFooBar = fizzBuzzFactory [(<span class="hljs-number">2</span>, <span class="hljs-string">&quot;Foo&quot;</span>), (<span class="hljs-number">4</span>, <span class="hljs-string">&quot;Bar&quot;</span>), (<span class="hljs-number">6</span>, <span class="hljs-string">&quot;FooBar&quot;</span>)]
<span class="hljs-title">myFooBar</span>  <span class="hljs-number">1</span> `shouldBe` <span class="hljs-string">&quot;1&quot;</span>
<span class="hljs-title">myFooBar</span>  <span class="hljs-number">2</span> `shouldBe` <span class="hljs-string">&quot;Foo&quot;</span>
<span class="hljs-title">myFooBar</span>  <span class="hljs-number">4</span> `shouldBe` <span class="hljs-string">&quot;Bar&quot;</span>
<span class="hljs-title">myFooBar</span>  <span class="hljs-number">6</span> `shouldBe` <span class="hljs-string">&quot;FooBar&quot;</span>
<span class="hljs-title">myFooBar</span>  <span class="hljs-number">8</span> `shouldBe` <span class="hljs-string">&quot;Bar&quot;</span>
<span class="hljs-title">myFooBar</span> <span class="hljs-number">10</span> `shouldBe` <span class="hljs-string">&quot;Foo&quot;</span>
<span class="hljs-title">myFooBar</span> <span class="hljs-number">12</span> `shouldBe` <span class="hljs-string">&quot;FooBar&quot;</span></code></pre>

### Solution