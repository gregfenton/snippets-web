// This snippet file was generated by processing the source file:
// ./firestore-next/test.solution-arrays.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_query_in_category]
import { collection, getDocs, query, where } from "firebase/firestore";

// Find all documents in the 'posts' collection that are
// in the 'cats' category.
const q = query(collection(db, "posts"), where("categories.cats", "==", true));
const docs = await getDocs(q);
// ...
// [END modular_query_in_category]