### Problem:
<p>Your task in this kata is to implement the function <code>create_number_class</code> which will take a string parameter <code>alphabet</code> and return a class representing a number composed of this alphabet.</p>
<p>The class number will implement the four classical arithmetic operations (<code>+</code>, <code>-</code>, <code>*</code>, <code>//</code>), a method to convert itself to string, and a <code>convert_to</code> method which will take another class number as parameter and will return the value of the actual class number converted to the equivalent value with tha alphabet of the parameter class (return a new instance of this one).</p>
<p>Example:</p>
<pre><code class="language-python">BinClass = create_number_class(&apos;01&apos;)
HexClass = create_number_class(&apos;0123456789ABCDEF&apos;)

x = BinClass(&apos;1010&apos;)
y = BinClass(&apos;10&apos;)

print(x+y)                   =&gt; &apos;1100&apos;
isinstance(x+y, BinClass)    =&gt; True
print(x.convert_to(HexClass) =&gt; &apos;A&apos;</code></pre>
<p><strong><em>Notes:</em></strong></p>
<ul>
<li>Only positives integers will be used (either as parameters or results of calculations).</li>
<li>You&apos;ll never encounter invalid calculations (divisions by zero or things like that).</li>
<li>Alphabets will contain at least 2 characters.</li>
</ul>

### Solution