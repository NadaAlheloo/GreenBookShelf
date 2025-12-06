import React, { useMemo, useState } from "react";
import BookCard from "../components/BookCard";

export default function Home({ books }) {
  // Two interactive controls (requirements): search + sort
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("title-az");
  const [featuredOnly, setFeaturedOnly] = useState(true); // keeps the UI simple (4 books by default)

  const visibleBooks = useMemo(() => {
    let list = [...books];

    // 1) reduce to featured set (default) or all
    if (featuredOnly) list = list.filter((b) => b.featured);

    // 2) search across title/author/genre (case-insensitive)
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter((b) => {
        return (
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.genre.toLowerCase().includes(q)
        );
      });
    }

    // 3) sort (combined with filtering via the same derived list)
    list.sort((a, b) => {
      switch (sort) {
        case "year-desc":
          return b.year - a.year;
        case "year-asc":
          return a.year - b.year;
        case "rating-desc":
          return b.rating - a.rating;
        case "author-az":
          return a.author.localeCompare(b.author);
        case "title-az":
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return list;
  }, [books, search, sort, featuredOnly]);

  return (
    <section className="page">
      <div className="pageHeader">
        <h1 className="pageTitle">Book Catalog</h1>
        <p className="pageLead">
          Use the controls to search and sort (all done with <code>.filter()</code> and <code>.sort()</code>).
        </p>
      </div>

      <div className="controls">
        <div className="control">
          <label className="label" htmlFor="search">Search</label>
          <input
            id="search"
            className="input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Title · author · genre"
          />
        </div>

        <div className="control">
          <label className="label" htmlFor="sort">Sort by</label>
          <select id="sort" className="select" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="title-az">Title (A–Z)</option>
            <option value="author-az">Author (A–Z)</option>
            <option value="year-desc">Year (new → old)</option>
            <option value="year-asc">Year (old → new)</option>
            <option value="rating-desc">Rating (high → low)</option>
          </select>
        </div>

        <div className="control controlInline">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={featuredOnly}
              onChange={(e) => setFeaturedOnly(e.target.checked)}
            />
            <span>Show featured only (4 books)</span>
          </label>
        </div>
      </div>

      <div className="resultsInfo">
        <strong>{visibleBooks.length}</strong> book(s) shown
        {featuredOnly ? <span className="hint"> · (turn off “featured only” to see all 10)</span> : null}
      </div>

      <div className="grid">
        {visibleBooks.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </section>
  );
}
