### Problem:
<p>You are writing an encoder/decoder to convert between javascript strings and a binary representation of Morse code.</p>
<p>Each Morse code character is represented by a series of &quot;dots&quot; and &quot;dashes&quot;. In binary, a dot is a single bit (<code>1</code>) and a dash is three bits (<code>111</code>). Between each dot or dash within a single character, we place a single zero bit. (I.e. &quot;dot dash&quot; would become <code>10111</code>.) Separate characters are separated by three zero bits (<code>000</code>). Words are spearated by a single space, which is represented by 7 zero bits (<code>0000000</code>).</p>
<br>
<h3>Formal Syntax</h3>
Binary Morse code has the following syntax: (Where &apos;1&apos; and &apos;0&apos; are literal bits.)

<pre>    message    ::= word
                 | word 0000000 message

    word       ::= character
                 | character 000 word

    character  ::= mark
                 | mark 0 character

    mark       ::= dot
                 | dash

    dot (&#xB7;)    ::= 1

    dash (&#x2013;)   ::= 111
</pre>

<br>
<h3>Morse Code</h3>
Chracters in Morse code are traditionally represented by a series of dots and dashes. Below is the full list of characters supported by our Binary Morse code:
<pre>A    &#xB7;&#x2013;
B    &#x2013;&#xB7;&#xB7;&#xB7;
C    &#x2013;&#xB7;&#x2013;&#xB7;
D    &#x2013;&#xB7;&#xB7;
E    &#xB7;
F    &#xB7;&#xB7;&#x2013;&#xB7;
G    &#x2013;&#x2013;&#xB7;
H    &#xB7;&#xB7;&#xB7;&#xB7;
I    &#xB7;&#xB7;
J    &#xB7;&#x2013;&#x2013;&#x2013;
K    &#x2013;&#xB7;&#x2013;
L    &#xB7;&#x2013;&#xB7;&#xB7;
M    &#x2013;&#x2013;
N    &#x2013;&#xB7;
O    &#x2013;&#x2013;&#x2013;
P    &#xB7;&#x2013;&#x2013;&#xB7;
Q    &#x2013;&#x2013;&#xB7;&#x2013;
R    &#xB7;&#x2013;&#xB7;
S    &#xB7;&#xB7;&#xB7;
T    &#x2013;
U    &#xB7;&#xB7;&#x2013;
V    &#xB7;&#xB7;&#xB7;&#x2013;
W    &#xB7;&#x2013;&#x2013;
X    &#x2013;&#xB7;&#xB7;&#x2013;
Y    &#x2013;&#xB7;&#x2013;&#x2013;
Z    &#x2013;&#x2013;&#xB7;&#xB7;
0    &#x2013;&#x2013;&#x2013;&#x2013;&#x2013;
1    &#xB7;&#x2013;&#x2013;&#x2013;&#x2013;
2    &#xB7;&#xB7;&#x2013;&#x2013;&#x2013;
3    &#xB7;&#xB7;&#xB7;&#x2013;&#x2013;
4    &#xB7;&#xB7;&#xB7;&#xB7;&#x2013;
5    &#xB7;&#xB7;&#xB7;&#xB7;&#xB7;
6    &#x2013;&#xB7;&#xB7;&#xB7;&#xB7;
7    &#x2013;&#x2013;&#xB7;&#xB7;&#xB7;
8    &#x2013;&#x2013;&#x2013;&#xB7;&#xB7;
9    &#x2013;&#x2013;&#x2013;&#x2013;&#xB7;
.    &#xB7;&#x2013;&#xB7;&#x2013;&#xB7;&#x2013;
,    &#x2013;&#x2013;&#xB7;&#xB7;&#x2013;&#x2013;
?    &#xB7;&#xB7;&#x2013;&#x2013;&#xB7;&#xB7;
&apos;    &#xB7;&#x2013;&#x2013;&#x2013;&#x2013;&#xB7;
!    &#x2013;&#xB7;&#x2013;&#xB7;&#x2013;&#x2013;
/    &#x2013;&#xB7;&#xB7;&#x2013;&#xB7;
(    &#x2013;&#xB7;&#x2013;&#x2013;&#xB7;
)    &#x2013;&#xB7;&#x2013;&#x2013;&#xB7;&#x2013;
&amp;    &#xB7;&#x2013;&#xB7;&#xB7;&#xB7;
:    &#x2013;&#x2013;&#x2013;&#xB7;&#xB7;&#xB7;
;    &#x2013;&#xB7;&#x2013;&#xB7;&#x2013;&#xB7;
=    &#x2013;&#xB7;&#xB7;&#xB7;&#x2013;
+    &#xB7;&#x2013;&#xB7;&#x2013;&#xB7;
-    &#x2013;&#xB7;&#xB7;&#xB7;&#xB7;&#x2013;
_    &#xB7;&#xB7;&#x2013;&#x2013;&#xB7;&#x2013;
&quot;    &#xB7;&#x2013;&#xB7;&#xB7;&#x2013;&#xB7;
$    &#xB7;&#xB7;&#xB7;&#x2013;&#xB7;&#xB7;&#x2013;
@    &#xB7;&#x2013;&#x2013;&#xB7;&#x2013;&#xB7;
</pre>

<br>
Note that space itself is not a character but is interpreted as the separater between words.
<br>
<br>

<p>The first method <code>Morse.encode</code> will take a String representing the message and will return an array of signed 32-bit integers in big-endian order and in two&apos;s complement format. (Note: This is the standard format for numbers returned by JavaScript bitwise operators.) Since it is possible that the Morse encoded message will not align perfectly with the binary 32-bit numbers, all unused bits are to be padded with 0&apos;s.
<br>
<br></p>
<p>The second method <code>Morse.decode</code> will take an array of numbers and return the String representation of the message.</p>
<h3>Example</h3>
<pre>Text content  H           E     L             L             O           [space] W             O               R           L             D       
Morse Code    &#xB7;&#xB7;&#xB7;&#xB7;        &#xB7;     &#xB7;&#x2212;&#xB7;&#xB7;          &#xB7;&#x2212;&#xB7;&#xB7;          &#x2212;&#x2212;&#x2212;                 &#xB7;&#x2212;&#x2212;           &#x2212;&#x2212;&#x2212;             &#xB7;&#x2212;&#xB7;         &#xB7;&#x2212;&#xB7;&#xB7;          &#x2212;&#xB7;&#xB7;     
Bit pattern   1010101 000 1 000 101110101 000 101110101 000 11101110111 0000000 101110111 000 11101110111 000 1011101 000 10111010 1000 1110101 00000000000000000
32-bit Value  -1,440,552,402                       | -1,547,992,901                    | -1,896,993,141                      | -1,461,059,584
Hex Value     AA22 EA2E                            | A3BB 80BB                         | 8EEE 2E8B                           | A8EA 0000
              ^        ^          ^        ^        ^         ^       ^         ^       ^         ^        ^        ^         ^         ^        ^       ^
              |        |          |        |        |         |       |         |       |         |        |        |         |         |        |       |
              0        8          16       24       0         8       16        24      0         8        16       24        0         8        16      24
</pre>
### Solution