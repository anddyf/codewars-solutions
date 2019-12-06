### Problem:
<p>Create a function that returns the name of the winner in a fight between two fighters.</p>
<p>Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having <code>health &lt;= 0</code>.</p>
<p>Each fighter will be a <code>Fighter</code> object/instance. See the Fighter class below in your chosen language.</p>
<p>Both <code>health</code> and <code>damagePerAttack</code> (<code>damage_per_attack</code> for python) will be integers larger than <code>0</code>. You can mutate the <code>Fighter</code> objects.</p>
<h2 id="example">Example:</h2>
<pre style="display: none;"><code>  declare_winner(Fighter(&quot;Lew&quot;, 10, 2), Fighter(&quot;Harry&quot;, 5, 4), &quot;Lew&quot;) =&gt; &quot;Lew&quot;

  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.</code></pre><pre style="display: none;"><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Fighter</span>(<span class="hljs-params">name, health, damagePerAttack</span>) </span>{
        <span class="hljs-keyword">this</span>.name = name;
        <span class="hljs-keyword">this</span>.health = health;
        <span class="hljs-keyword">this</span>.damagePerAttack = damagePerAttack;
        <span class="hljs-keyword">this</span>.toString = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name; }
}</code></pre>
<pre><code class="language-python"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Fighter</span><span class="hljs-params">(object)</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__init__</span><span class="hljs-params">(self, name, health, damage_per_attack)</span>:</span>
        self.name = name
        self.health = health
        self.damage_per_attack = damage_per_attack

    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__str__</span><span class="hljs-params">(self)</span>:</span> <span class="hljs-keyword">return</span> <span class="hljs-string">&quot;Fighter({}, {}, {})&quot;</span>.format(self.name, self.health, self.damage_per_attack)
    __repr__=__str__</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Fighter</span> </span>{
  <span class="hljs-keyword">public</span> String name;
  <span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> health, damagePerAttack;
  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">Fighter</span><span class="hljs-params">(String name, <span class="hljs-keyword">int</span> health, <span class="hljs-keyword">int</span> damagePerAttack)</span> </span>{
    <span class="hljs-keyword">this</span>.name = name;
    <span class="hljs-keyword">this</span>.health = health;
    <span class="hljs-keyword">this</span>.damagePerAttack = damagePerAttack;
  }
}</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Fighter</span> {
  <span class="hljs-keyword">public</span> <span class="hljs-keyword">string</span> Name;
  <span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> Health, DamagePerAttack;
  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">Fighter</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> name, <span class="hljs-keyword">int</span> health, <span class="hljs-keyword">int</span> damagePerAttack</span>)</span> {
    <span class="hljs-keyword">this</span>.Name = name;
    <span class="hljs-keyword">this</span>.Health = health;
    <span class="hljs-keyword">this</span>.DamagePerAttack = damagePerAttack;
  }
}</code></pre>
<pre style="display: none;"><code class="language-clojure">Technical note: The second fighter argument (f2) always attacks first.

(defrecord Fighter [name hp attack])</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Fighter</span>
{</span>
<span class="hljs-keyword">private</span>:
    <span class="hljs-built_in">std</span>::<span class="hljs-built_in">string</span> name;

    <span class="hljs-keyword">int</span> health;

    <span class="hljs-keyword">int</span> damagePerAttack;

<span class="hljs-keyword">public</span>:
    Fighter(<span class="hljs-built_in">std</span>::<span class="hljs-built_in">string</span> name, <span class="hljs-keyword">int</span> health, <span class="hljs-keyword">int</span> damagePerAttack)
    {
        <span class="hljs-keyword">this</span>-&gt;name = name;
        <span class="hljs-keyword">this</span>-&gt;health = health;
        <span class="hljs-keyword">this</span>-&gt;damagePerAttack = damagePerAttack;
    }

    ~Fighter() { };

    <span class="hljs-built_in">std</span>::<span class="hljs-function"><span class="hljs-built_in">string</span> <span class="hljs-title">getName</span><span class="hljs-params">()</span>
    </span>{
        <span class="hljs-keyword">return</span> name;
    }

    <span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">getHealth</span><span class="hljs-params">()</span>
    </span>{
        <span class="hljs-keyword">return</span> health;
    }

    <span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">getDamagePerAttack</span><span class="hljs-params">()</span>
    </span>{
        <span class="hljs-keyword">return</span> damagePerAttack;
    }

    <span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">setHealth</span><span class="hljs-params">(<span class="hljs-keyword">int</span> value)</span>
    </span>{
        health = value;
    }
};</code></pre>

### Solution