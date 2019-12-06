### Problem:
<p>For this exercise you will be strengthening  your page-fu mastery.  You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array. </p>
<p>The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant. </p>
<p>The following are some examples of how this class is used:</p>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-keyword">var</span> helper = <span class="hljs-keyword">new</span> PaginationHelper([<span class="hljs-string">&apos;a&apos;</span>,<span class="hljs-string">&apos;b&apos;</span>,<span class="hljs-string">&apos;c&apos;</span>,<span class="hljs-string">&apos;d&apos;</span>,<span class="hljs-string">&apos;e&apos;</span>,<span class="hljs-string">&apos;f&apos;</span>], <span class="hljs-number">4</span>);
helper.pageCount(); <span class="hljs-comment">//should == 2</span>
helper.itemCount(); <span class="hljs-comment">//should == 6</span>
helper.pageItemCount(<span class="hljs-number">0</span>); <span class="hljs-comment">//should == 4</span>
helper.pageItemCount(<span class="hljs-number">1</span>); <span class="hljs-comment">// last page - should == 2</span>
helper.pageItemCount(<span class="hljs-number">2</span>); <span class="hljs-comment">// should == -1 since the page is invalid</span>

<span class="hljs-comment">// pageIndex takes an item index and returns the page that it belongs on</span>
helper.pageIndex(<span class="hljs-number">5</span>); <span class="hljs-comment">//should == 1 (zero based index)</span>
helper.pageIndex(<span class="hljs-number">2</span>); <span class="hljs-comment">//should == 0</span>
helper.pageIndex(<span class="hljs-number">20</span>); <span class="hljs-comment">//should == -1</span>
helper.pageIndex(<span class="hljs-number">-10</span>); <span class="hljs-comment">//should == -1</span></code></pre>
<pre style="display: none;"><code class="language-java">PaginationHelper&lt;Character&gt; helper = <span class="hljs-keyword">new</span> PaginationHelper(Arrays.asList(<span class="hljs-string">&apos;a&apos;</span>, <span class="hljs-string">&apos;b&apos;</span>, <span class="hljs-string">&apos;c&apos;</span>, <span class="hljs-string">&apos;d&apos;</span>, <span class="hljs-string">&apos;e&apos;</span>, <span class="hljs-string">&apos;f&apos;</span>), <span class="hljs-number">4</span>);
helper.pageCount(); <span class="hljs-comment">//should == 2</span>
helper.itemCount(); <span class="hljs-comment">//should == 6</span>
helper.pageItemCount(<span class="hljs-number">0</span>); <span class="hljs-comment">//should == 4</span>
helper.pageItemCount(<span class="hljs-number">1</span>); <span class="hljs-comment">// last page - should == 2</span>
helper.pageItemCount(<span class="hljs-number">2</span>); <span class="hljs-comment">// should == -1 since the page is invalid</span>

<span class="hljs-comment">// pageIndex takes an item index and returns the page that it belongs on</span>
helper.pageIndex(<span class="hljs-number">5</span>); <span class="hljs-comment">//should == 1 (zero based index)</span>
helper.pageIndex(<span class="hljs-number">2</span>); <span class="hljs-comment">//should == 0</span>
helper.pageIndex(<span class="hljs-number">20</span>); <span class="hljs-comment">//should == -1</span>
helper.pageIndex(-<span class="hljs-number">10</span>); <span class="hljs-comment">//should == -1</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">helper = <span class="hljs-keyword">new</span> PaginationHelper([<span class="hljs-string">&apos;a&apos;</span>,<span class="hljs-string">&apos;b&apos;</span>,<span class="hljs-string">&apos;c&apos;</span>,<span class="hljs-string">&apos;d&apos;</span>,<span class="hljs-string">&apos;e&apos;</span>,<span class="hljs-string">&apos;f&apos;</span>], <span class="hljs-number">4</span>)
helper.pageCount() <span class="hljs-comment"># should == 2</span>
helper.itemCount() <span class="hljs-comment"># should == 6</span>
helper.pageItemCount(<span class="hljs-number">0</span>)  <span class="hljs-comment"># should == 4</span>
helper.pageItemCount(<span class="hljs-number">1</span>) <span class="hljs-comment"># last page - should == 2</span>
helper.pageItemCount(<span class="hljs-number">2</span>) <span class="hljs-comment"># should == -1 since the page is invalid</span>

<span class="hljs-comment"># pageIndex takes an item index and returns the page that it belongs on</span>
helper.pageIndex(<span class="hljs-number">5</span>) <span class="hljs-comment"># should == 1 (zero based index)</span>
helper.pageIndex(<span class="hljs-number">2</span>) <span class="hljs-comment"># should == 0</span>
helper.pageIndex(<span class="hljs-number">20</span>) <span class="hljs-comment"># should == -1</span>
helper.pageIndex(<span class="hljs-number">-10</span>) <span class="hljs-comment"># should == -1</span></code></pre>
<pre><code class="language-ruby">helper = PaginationHelper.new([<span class="hljs-string">&apos;a&apos;</span>,<span class="hljs-string">&apos;b&apos;</span>,<span class="hljs-string">&apos;c&apos;</span>,<span class="hljs-string">&apos;d&apos;</span>,<span class="hljs-string">&apos;e&apos;</span>,<span class="hljs-string">&apos;f&apos;</span>], <span class="hljs-number">4</span>)
helper.page_count <span class="hljs-comment"># should == 2</span>
helper.item_count <span class="hljs-comment"># should == 6</span>
helper.page_item_count(<span class="hljs-number">0</span>)  <span class="hljs-comment"># should == 4</span>
helper.page_item_count(<span class="hljs-number">1</span>) <span class="hljs-comment"># last page - should == 2</span>
helper.page_item_count(<span class="hljs-number">2</span>) <span class="hljs-comment"># should == -1 since the page is invalid</span>

<span class="hljs-comment"># page_ndex takes an item index and returns the page that it belongs on</span>
helper.page_index(<span class="hljs-number">5</span>) <span class="hljs-comment"># should == 1 (zero based index)</span>
helper.page_index(<span class="hljs-number">2</span>) <span class="hljs-comment"># should == 0</span>
helper.page_index(<span class="hljs-number">20</span>) <span class="hljs-comment"># should == -1</span>
helper.page_index(-<span class="hljs-number">10</span>) <span class="hljs-comment"># should == -1 because negative indexes are invalid</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">collection</span>   = [&apos;a&apos;,&apos;b&apos;,&apos;c&apos;,&apos;d&apos;,&apos;e&apos;,&apos;f&apos;]
<span class="hljs-title">itemsPerPage</span> = <span class="hljs-number">4</span>

<span class="hljs-title">pageCount</span> collection itemsPerPage       `shouldBe` <span class="hljs-number">2</span>
<span class="hljs-title">itemCount</span> collection itemsPerPage       `shouldBe` <span class="hljs-number">6</span>

<span class="hljs-title">pageItemCount</span> collection itemsPerPage <span class="hljs-number">0</span> `shouldBe` <span class="hljs-type">Just</span> <span class="hljs-number">4</span> <span class="hljs-comment">-- four of six items</span>
<span class="hljs-title">pageItemCount</span> collection itemsPerPage <span class="hljs-number">1</span> `shouldBe` <span class="hljs-type">Just</span> <span class="hljs-number">2</span> <span class="hljs-comment">-- the last two items</span>
<span class="hljs-title">pageItemCount</span> collection itemsPerPage <span class="hljs-number">3</span> `shouldBe` <span class="hljs-type">Nothing</span> <span class="hljs-comment">-- page doesn&apos;t exist</span>

<span class="hljs-title">pageIndex</span> collection itemsPerPage  <span class="hljs-number">0</span>    `shouldBe` <span class="hljs-type">Just</span> <span class="hljs-number">0</span> <span class="hljs-comment">-- zero based index</span>
<span class="hljs-title">pageIndex</span> collection itemsPerPage  <span class="hljs-number">5</span>    `shouldBe` <span class="hljs-type">Just</span> <span class="hljs-number">1</span> 
<span class="hljs-title">pageIndex</span> collection itemsPerPage <span class="hljs-number">20</span>    `shouldBe` <span class="hljs-type">Nothing</span>
<span class="hljs-title">pageIndex</span> collection itemsPerPage (<span class="hljs-number">-20</span>) `shouldBe` <span class="hljs-type">Nothing</span></code></pre>
<pre style="display: none;"><code class="language-python">helper = PaginationHelper([<span class="hljs-string">&apos;a&apos;</span>,<span class="hljs-string">&apos;b&apos;</span>,<span class="hljs-string">&apos;c&apos;</span>,<span class="hljs-string">&apos;d&apos;</span>,<span class="hljs-string">&apos;e&apos;</span>,<span class="hljs-string">&apos;f&apos;</span>], <span class="hljs-number">4</span>)
helper.page_count <span class="hljs-comment"># should == 2</span>
helper.item_count <span class="hljs-comment"># should == 6</span>
helper.page_item_count(<span class="hljs-number">0</span>)  <span class="hljs-comment"># should == 4</span>
helper.page_item_count(<span class="hljs-number">1</span>) <span class="hljs-comment"># last page - should == 2</span>
helper.page_item_count(<span class="hljs-number">2</span>) <span class="hljs-comment"># should == -1 since the page is invalid</span>

<span class="hljs-comment"># page_ndex takes an item index and returns the page that it belongs on</span>
helper.page_index(<span class="hljs-number">5</span>) <span class="hljs-comment"># should == 1 (zero based index)</span>
helper.page_index(<span class="hljs-number">2</span>) <span class="hljs-comment"># should == 0</span>
helper.page_index(<span class="hljs-number">20</span>) <span class="hljs-comment"># should == -1</span>
helper.page_index(<span class="hljs-number">-10</span>) <span class="hljs-comment"># should == -1 because negative indexes are invalid</span></code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">var</span> helper = <span class="hljs-keyword">new</span> PaginationHelper&lt;<span class="hljs-keyword">char</span>&gt;(<span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">char</span>&gt;{<span class="hljs-string">&apos;a&apos;</span>, <span class="hljs-string">&apos;b&apos;</span>, <span class="hljs-string">&apos;c&apos;</span>, <span class="hljs-string">&apos;d&apos;</span>, <span class="hljs-string">&apos;e&apos;</span>, <span class="hljs-string">&apos;f&apos;</span>}, <span class="hljs-number">4</span>);
helper.PageCount; <span class="hljs-comment">//should == 2</span>
helper.ItemCount; <span class="hljs-comment">//should == 6</span>
helper.PageItemCount(<span class="hljs-number">0</span>); <span class="hljs-comment">//should == 4</span>
helper.PageItemCount(<span class="hljs-number">1</span>); <span class="hljs-comment">// last page - should == 2</span>
helper.PageItemCount(<span class="hljs-number">2</span>); <span class="hljs-comment">// should == -1 since the page is invalid</span>

<span class="hljs-comment">// pageIndex takes an item index and returns the page that it belongs on</span>
helper.PageIndex(<span class="hljs-number">5</span>); <span class="hljs-comment">//should == 1 (zero based index)</span>
helper.PageIndex(<span class="hljs-number">2</span>); <span class="hljs-comment">//should == 0</span>
helper.PageIndex(<span class="hljs-number">20</span>); <span class="hljs-comment">//should == -1</span>
helper.PageIndex(<span class="hljs-number">-10</span>); <span class="hljs-comment">//should == -1</span></code></pre>

### Solution