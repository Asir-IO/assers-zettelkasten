---
title: Matrix Multiplications as Outer Products
date: 2026-03-09
tags:
  - course/
  - domain/maths
  - type/concept
draft: false
thumbnail: "[[Matrix Multiplication 2026-02-24 01.14.37.excalidraw.svg]]"
comments: true
related-notes:
  - "[[Vectors Outer Product]]"
  - "[[Transposing a Matrix]]"
  - "[[Matrix Multiplication as Inner Products]]"
---
Matrix Multiplication is a mathematical operation that a column vectors matrix perform on a rows vectors matrix.   

Given a matrix $A$ that u view as a columns matrix, and a rows matrix $B^T$,   
$$
A = \begin{bmatrix}
\uparrow & \uparrow \\
\vec{a}_0 & \vec{a}_1 \\
\downarrow & \downarrow
\end{bmatrix}\;\;\;
B^T = \begin{bmatrix}
\leftarrow & \vec{b}_0 & \rightarrow \\
\leftarrow & \vec{b}_1 & \rightarrow\\
\end{bmatrix}
$$
Their multiplication ($A * B^T$) is computed by adding up the outer product of the i-th column vector in A by the i-th row vector in B, for all i.

![[Matrix Multiplication 2026-02-24 01.14.37.excalidraw.svg]]   

---
# Example
A digital example:
![[Matrix Multiplications as Outer Products 2026-05-26 19.28.42.excalidraw.svg]]
A hand written example:
![[Matrix Multiplications as Outer Products-1.mp4]]

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail                                                                                                                                                              | Note                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![[lab-temp-thumb.excalidraw.svg\|120]]                                                                                                                                | [[Vectors Outer Product]]                                                           |
| ![[Matrix Multiplication as Dot Products 2026-03-09 01.23.38.excalidraw.svg\|Matrix Multiplication as Dot Products 2026-03-09 01.23.38.excalidraw.svg\|120]] | [[Matrix Multiplication as Inner Products]] |
| ![[Transposing a Matrix 2026-02-24 16.11.14.excalidraw.svg\|Transposing a Matrix 2026-02-24 16.11.14.excalidraw.svg\|120]]                                   | [[Transposing a Matrix]]                                                           |

<!-- SerializedQuery END -->
