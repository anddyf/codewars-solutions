### Problem:
<p>In genetics a reading frame is a way to divide a sequence of nucleotides (DNA bases) into a set of consecutive non-overlapping triplets (also called codon). Each of this triplets is translated into an amino-acid during a translation process to create proteins.</p>
<p>In a single strand of DNA you find 3 Reading frames, for example the following sequence:</p>
<pre><code>AGGTGACACCGCAAGCCTTATATTAGC</code></pre><p>will be decompose in:</p>
<pre><code>Frame 1: AGG&#xB7;TGA&#xB7;CAC&#xB7;CGC&#xB7;AAG&#xB7;CCT&#xB7;TAT&#xB7;ATT&#xB7;AGC
Frame 2: A&#xB7;GGT&#xB7;GAC&#xB7;ACC&#xB7;GCA&#xB7;AGC&#xB7;CTT&#xB7;ATA&#xB7;TTA&#xB7;GC
Frame 3: AG&#xB7;GTG&#xB7;ACA&#xB7;CCG&#xB7;CAA&#xB7;GCC&#xB7;TTA&#xB7;TAT&#xB7;TAG&#xB7;C</code></pre><p>In a double strand DNA you find 3 more Reading frames base on the reverse complement-strand, given the previous DNA sequence, in the reverse complement ( A--&gt;T, G--&gt;C, T--&gt;A, C--&gt;G).
Due to the splicing of DNA strands and the fixed reading direction of a nucleotide strand, the reverse complement gets read from right to left</p>
<pre><code>                        AGGTGACACCGCAAGCCTTATATTAGC
Reverse complement:     TCCACTGTGGCGTTCGGAATATAATCG  
reversed reverse frame: GCTAATATAAGGCTTGCGGTGTCACCT</code></pre><p>You have:</p>
<pre><code>Reverse Frame 1: GCT AAT ATA AGG CTT GCG GTG TCA CCT
reverse Frame 2: G CTA ATA TAA GGC TTG CGG TGT CAC CT
reverse Frame 3: GC TAA TAT AAG GCT TGC GGT GTC ACC T</code></pre><p>You can find more information about the Open Reading frame in wikipedia just [here] (<a href="https://en.wikipedia.org/wiki/Reading_frame" target="_blank">https://en.wikipedia.org/wiki/Reading_frame</a>)</p>
<p>Given the <a href="http://www.ncbi.nlm.nih.gov/Taxonomy/Utils/wprintgc.cgi#SG1" target="_blank">standard table of genetic code</a>:</p>
<pre><code>    AAs  = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG</code></pre><p>The tri-nucleotide TTT = F, TTC = F, TTA = L...</p>
<p>So our 6 frames will be translate as:</p>
<pre><code>Frame 1: AGG&#xB7;TGA&#xB7;CAC&#xB7;CGC&#xB7;AAG&#xB7;CCT&#xB7;TAT&#xB7;ATT&#xB7;AGC
          R   *   H   R   K   P   Y   I   S

Frame 2: A&#xB7;GGT&#xB7;GAC&#xB7;ACC&#xB7;GCA&#xB7;AGC&#xB7;CTT&#xB7;ATA&#xB7;TTA&#xB7;GC
             G  D   T   A   S   L   I   L  

Frame 3: AG&#xB7;GTG&#xB7;ACA&#xB7;CCG&#xB7;CAA&#xB7;GCC&#xB7;TTA&#xB7;TAT&#xB7;TAG&#xB7;C
             V   T   P   Q   A   L   Y   *

Reverse Frame 1: GCT AAT ATA AGG CTT GCG GTG TCA CCT
                  A   N   I   R   L   A   V   S   P

Reverse Frame 2: G CTA ATA TAA GGC TTG CGG TGT CAC CT
                    L   I   *   G   L   R   C   H

Reverse Frame 3: GC TAA TAT AAG GCT TGC GGT GTC ACC T
                     *   Y   K   A   C   G   V   T
</code></pre><p>In this kata you should create a function that translates DNA on all 6 frames, this function takes 2 arguments.
The first one is the DNA sequence the second one is an array of frame number for example if we want to translate in Frame 1 and Reverse 1 this array will be [1,-1]. Valid frames are 1, 2, 3 and -1, -2, -3.</p>
<p>The translation hash is available for you under a translation hash <code>$codons</code> [Ruby] or <code>codon</code> [other languages] (for example to access value of &apos;TTT&apos; you should  call $codons[&apos;TTT&apos;] =&gt; &apos;F&apos;).</p>
<p>The function should return an array with all translation asked for, by default the function do the translation on all 6 frames.</p>

### Solution