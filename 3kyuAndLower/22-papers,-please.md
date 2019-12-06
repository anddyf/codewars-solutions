### Problem:
<p><img src="https://i.imgur.com/mYgmiOz.jpg" alt="Gameplay screencap"></p>
<p><a href="https://en.wikipedia.org/wiki/Papers%2C_Please" style="color:#9f9;text-decoration:none" target="_blank"><b>Papers, Please</b></a> is an indie video game where the player takes on a the role of a border crossing immigration officer in the fictional dystopian Eastern Bloc-like country of Arstotzka in the year 1982. As the officer, the player must review each immigrant and returning citizen&apos;s passports and other supporting paperwork against a list of ever-increasing rules using a number of tools and guides, allowing in only those with the proper paperwork, rejecting those without all proper forms, and at times detaining those with falsified information.</p>

<h2 style="color:#f88">Objective</h2>
<p>Your task is to create a constructor function (or class) and a set of instance methods to perform the tasks of the border checkpoint inspection officer. The methods you will need to create are as follow:</p>

<h3>Method: <span style="color:#8df">receiveBulletin</span></h3>
<p>Each morning you are issued an official bulletin from the Ministry of Admission. This bulletin will provide updates to regulations and procedures and the name of a wanted criminal.</p>
<p>The bulletin is provided in the form of a <code>string</code>. It may include one or more of the following:</p>

<ul>
<li>Updates to the list of nations (comma-separated if more than one) whose citizens may enter (begins empty, before the first bulletin):<pre><code>example 1: Allow citizens of Obristan
example 2: Deny citizens of Kolechia, Republia</code></pre></li>
<li>Updates to required documents<pre><code>example 1: Foreigners require access permit
example 2: Citizens of Arstotzka require ID card
example 3: Workers require work pass</code></pre></li>
<li>Updates to required vaccinations<pre><code>example 1: Citizens of Antegria, Republia, Obristan require polio vaccination
example 2: Entrants no longer require tetanus vaccination</code></pre></li>
<li>Update to a currently wanted criminal<pre><code>example 1: Wanted by the State: Hubert Popovic</code></pre></li>
</ul>
<h3>Method: <span style="color:#8df">inspect</span></h3>
<p>Each day, a number of entrants line up outside the checkpoint inspection booth to gain passage into Arstotzka. The <code>inspect</code> method will receive an object representing each entrant&apos;s set of identifying documents. This object will contain zero or more properties which represent separate documents. Each property will be a <code>string</code> value. These properties may include the following:</p>
<ul>
    <li><code>passport</code></li>
    <li><code>ID_card</code> (only issued to citizens of Arstotzka)</li>
    <li><code>access_permit</code></li>
    <li><code>work_pass</code></li>
    <li><code>grant_of_asylum</code></li>
    <li><code>certificate_of_vaccination</code></li>
    <li><code>diplomatic_authorization</code></li>
</ul>

<p>The <code>inspect</code> method will return a result based on whether the entrant passes or fails inspection:</p>
<p><b>Conditions for passing inspection</b></p>
<ul>
    <li>All required documents are present</li>
    <li>There is no conflicting information across the provided documents</li>
    <li>All documents are current (ie. none have expired) -- a document is considered expired if the expiration date is <code>November 22, 1982</code> or earlier</li>
    <li>The entrant is not a wanted criminal</li>
    <li>If a <code>certificate_of_vaccination</code> is required and provided, it must list the required vaccination</li>
    <li>If entrant is a foreigner, a <code>grant_of_asylum</code> or <code>diplomatic_authorization</code> are acceptable in lieu of an <code>access_permit</code>. In the case where a <code>diplomatic_authorization</code> is used, it must include <code>Arstotzka</code> as one of the list of nations that can be accessed.</li>
</ul>
<p>If the entrant <span style="color:#0f0">passes</span> inspection, the method should return one of the following <code>string</code> values:</p>
<ul>
    <li>If the entrant is a citizen of Arstotzka: <code>Glory to Arstotzka.</code></li>
    <li>If the entrant is a foreigner: <code>Cause no trouble.</code></li>
</ul>

<p>If the entrant <span style="color:#f66">fails</span> the inspection due to expired or missing documents, or their <code>certificate_of_vaccination</code> does not include the necessary vaccinations, return <code>Entry denied:</code> with the reason for denial appended.</p>
<pre><code>Example 1: Entry denied: passport expired.
Example 2: Entry denied: missing required vaccination.
Example 3: Entry denied: missing required access permit.</code></pre><p>If the entrant <span style="color:#f66">fails</span> the inspection due to mismatching information between documents (causing suspicion of forgery) or if they&apos;re a wanted criminal, return <code>Detainment:</code> with the reason for detainment appended.</p>
<ul>
    <li>If due to information mismatch, include the mismatched item. e.g.<code>Detainment: ID number mismatch.</code></li>
    <li>If the entrant is a wanted criminal: <code>Detainment: Entrant is a wanted criminal.</code></li>
    <li><b>NOTE:</b> One wanted criminal will be specified in each daily bulletin, and must be detained when received for that day only. For example, if an entrant on Day 20 has the same name as a criminal declared on Day 10, they are not to be detained for being a criminal.<br>Also, if any of an entrant&apos;s identifying documents include the name of that day&apos;s wanted criminal (in case of mismatched names across multiple documents), they are assumed to be the wanted criminal.</li>
</ul>

<p>In some cases, there may be multiple reasons for denying or detaining an entrant. For this exercise, you will only need to provide one reason.</p>
<ul>
    <li>If the entrant meets the criteria for both entry denial and detainment, priority goes to detaining.<br>
    For example, if they are missing a required document and are also a wanted criminal, then they should be detained instead of turned away.</li>
    <li>In the case where the entrant has mismatching information and is a wanted criminal, detain for being a wanted criminal.</li>
</ul>

<h2 style="color:#f88">Test Example</h2>

<pre><code class="language-javascript"><span class="hljs-keyword">const</span> bulletin = <span class="hljs-string">`Entrants require passport
Allow citizens of Arstotzka, Obristan`</span>;

<span class="hljs-keyword">const</span> inspector = <span class="hljs-keyword">new</span> Inspector();
inspector.receiveBulletin(bulletin);

<span class="hljs-keyword">const</span> entrant1 = {
    <span class="hljs-attr">passport</span>:<span class="hljs-string">`ID#: GC07D-FU8AR
    NATION: Arstotzka
    NAME: Guyovich, Russian
    DOB: 1933.11.28
    SEX: M
    ISS: East Grestin
    EXP: 1983.07.10`</span>
};

inspector.inspect(entrant1); <span class="hljs-comment">//&apos;Glory to Arstotzka.&apos;</span></code></pre>
<pre style="display: none;"><code class="language-python">bulletin = <span class="hljs-string">&quot;&quot;&quot;Entrants require passport
Allow citizens of Arstotzka, Obristan&quot;&quot;&quot;</span>

inspector = Inspector()
inspector.receive_bulletin(bulletin)

entrant1 = {
    <span class="hljs-string">&quot;passport&quot;</span>: <span class="hljs-string">&quot;&quot;&quot;ID#: GC07D-FU8AR
    NATION: Arstotzka
    NAME: Guyovich, Russian
    DOB: 1933.11.28
    SEX: M
    ISS: East Grestin
    EXP: 1983.07.10&quot;&quot;&quot;</span>
}

inspector.inspect(entrant1) <span class="hljs-comment">#=&gt; &apos;Glory to Arstotzka.&apos;</span></code></pre>
<pre style="display: none;"><code class="language-java">String bulletin = <span class="hljs-string">&quot;Entrants require passport\n&quot;</span> +
    <span class="hljs-string">&quot;Allow citizens of Arstotzka, Obristan&quot;</span>;

Inspector inspector = <span class="hljs-keyword">new</span> Inspector();
inspector.receiveBulletin(bulletin);

Map&lt;String, String&gt; entrant1 = <span class="hljs-keyword">new</span> HashMap&lt;&gt;();
entrant1.put(<span class="hljs-string">&quot;passport&quot;</span>, <span class="hljs-string">&quot;ID#: GC07D-FU8AR\n&quot;</span> +
    <span class="hljs-string">&quot;NATION: Arstotzka\n&quot;</span> +
    <span class="hljs-string">&quot;NAME: Guyovich, Russian\n&quot;</span> +
    <span class="hljs-string">&quot;DOB: 1933.11.28\n&quot;</span> +
    <span class="hljs-string">&quot;SEX: M\n&quot;</span> +
    <span class="hljs-string">&quot;ISS: East Grestin\n&quot;</span> +
    <span class="hljs-string">&quot;EXP: 1983.07.10\n&quot;</span>
);

inspector.inspect(entrant1); <span class="hljs-comment">// &quot;Glory to Arstotzka.&quot;</span></code></pre>
<h2 style="color:#f88">Additional Notes</h2>

<ul>
<li>Inputs will always be valid.</li>
<li>There are a total of 7 countries: <code>Arstotzka</code>, <code>Antegria</code>, <code>Impor</code>, <code>Kolechia</code>, <code>Obristan</code>, <code>Republia</code>, and <code>United Federation</code>.</li>
<li>Not every single possible case has been listed in this Description; use the test feedback to help you handle all cases.</li>
<li>The concept of this kata is derived from the video game of the same name, but it is not meant to be a direct representation of the game.</li>
</ul>
<p>If you enjoyed this kata, be sure to check out <a href="https://www.codewars.com/users/docgunthrop/authored" target="_blank">my other katas</a>.</p>

### Solution