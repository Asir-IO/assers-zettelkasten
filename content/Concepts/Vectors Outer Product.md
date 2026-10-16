---
title: Vectors Outer Product
date: 2026-03-09
tags:
  - type/concept
  - course/
  - domain/maths
draft: false
comments: true
related-notes:
  -
---
The *outer product* is a mathematical operation that a column vector performs on a row vector.    

Given that $a$ is a column vector and $b$ is a row vector,    
I like to think of their outer product ($a \otimes b$) as forming a multiplication table between each entry in a and b; in other words, taking the pairwise product of a and b and storing it in a matrix.   
![[Vectors Outer Product 2026-10-15 21.20.15.excalidraw.svg]]

---
# Example
This is how I do a vector outer product, on paper.   
![[Vectors Outer Product-1.mp4]]

---
... (it basically is the same thing) but it can also viewed as $a$ storing scaled copies of itself by each element in $b$ in a columns matrix.
$$
\begin{bmatrix} \uparrow \\ a \\ \downarrow \end{bmatrix} \otimes \begin{bmatrix} b_0 & b_1 & \dots & b_n \end{bmatrix} = \begin{bmatrix} \uparrow & \uparrow & & \uparrow \\ b_0 * a & b_1 * a & \dots & b_n * a \\ \downarrow & \downarrow & & \downarrow \end{bmatrix}
$$
Or as $b$ storing scaled copies of itself by each element in $a$ inside a rows matrix.
$$
\begin{bmatrix} a_0 \\ a_1 \\ \vdots \\ a_m \end{bmatrix} \otimes \begin{bmatrix} \leftarrow & b & \rightarrow \end{bmatrix} = \begin{bmatrix} \leftarrow & a_0 * b & \rightarrow \\ \leftarrow & a_1 * b & \rightarrow \\ & \vdots & \\ \leftarrow & a_m * b & \rightarrow \end{bmatrix}
$$

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note |
| --------- | ---- |

<!-- SerializedQuery END -->
