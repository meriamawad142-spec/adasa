import React from "react";
import data from "../../Data/Data.json";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
useSearchParams;

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || null,
  );
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const posts = data.posts;
  const featuredcategories = data.categories;
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1);
  };
  function resetFilters() {
    setSelectedCategory(null);
    setSearchTerm("");
  }
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;
  const finalPosts = searchTerm
    ? filteredPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : filteredPosts;
  const postsPerPage = 6;
  const totalPages = Math.ceil(finalPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const finals = finalPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label inline-flex items-center gap-2 mb-6">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              ></path>
            </svg>
            مدونتنا
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            استكشف <span className="gradient-text">مقالاتنا</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </div>
      <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="transition-all duration-300 bg-[#161616] border border-[#262626] outline-none rounded-xl w-full px-5 py-4 text-white focus:border-orange-500 focus:ring-3 focus:ring-orange-500/10"
                placeholder="ابحث في المقالات..."
              />
              <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"></i>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => handleCategoryClick(null)}
                className={`px-4 py-2 rounded-xl cursor-pointer text-sm font-medium transition-all duration-300 ${
                  selectedCategory === null
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                }`}
              >
                جميع المقالات
              </button>

              {featuredcategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`px-4 cursor-pointer py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-neutral-400">
            عرض{" "}
            <span className="font-bold text-white">
              {finalPosts.length} مقالات{" "}
              {selectedCategory && (
                <>
                  في <span className="text-orange-500">{selectedCategory}</span>
                </>
              )}
            </span>
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
                title="عرض قائمة"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
                title="عرض شبكي"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
            {selectedCategory ? (
              <button
                class="text-sm text-neutral-500 hover:text-orange-500 flex items-center gap-1 transition-colors"
                onClick={resetFilters}
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                مسح الفلاتر
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        {finals.length > 0 ? (
          <div
            className={
              viewMode === "list"
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-4"
            }
          >
            {finals.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.id}>
                {viewMode === "list" ? (
                  <article className="group card hover:-translate-y-1 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                        <span className="flex items-center gap-1">
                          <i className="fa-regular fa-clock"></i>{" "}
                          {post.readTime}
                        </span>
                        <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                        <span>
                          {new Date(post.date).toLocaleString("ar-EG", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                        <div className="flex items-center gap-3">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                          />
                          <div>
                            <p className="text-sm font-medium text-white">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {post.author.role}
                            </p>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                          <i className="fa-solid fa-angle-left text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                        </div>
                      </div>
                    </div>
                  </article>
                ) : (
                  <div className="group cursor-pointer relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto flex-shrink-0 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <div className="flex-1 p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-neutral-500">
                            <i className="fa-regular fa-clock"></i>{" "}
                            {post.readTime}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
                          {post.title}
                        </h2>
                        <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex gap-3 items-center">
                            <div className="relative">
                              <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                              />
                              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                            </div>
                            <div>
                              <p className="text-white text-sm font-medium">
                                {post.author.name}
                              </p>
                              <p className="text-gray-500 text-xs">
                                {post.date}
                              </p>
                            </div>
                          </div>
                          <span className="flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                            اقرأ المقال
                            <i className="fa-solid fa-arrow-left"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div class="text-center py-20">
            <div class="w-24 h-24 bg-[#161616] border border-[#262626] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                class="w-12 h-12 text-neutral-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">لا توجد مقالات</h3>
            <p class="text-neutral-400 mb-6">
              حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
            </p>
            <button
              class="btn-primary inline-flex items-center gap-2"
              onClick={resetFilters}
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                ></path>
              </svg>
              إعادة تعيين الفلاتر
            </button>
          </div>
        )}
        {totalPages > 1 ? (
          <>
            {" "}
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                className={
                  currentPage === 1
                    ? "p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                    : "p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a] cursor-pointer"
                }
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <svg
                  className="w-5 h-5 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    onClick={() => setCurrentPage(index + 1)}
                    className={
                      index + 1 === currentPage
                        ? "min-w-[44px] h-11 cursor-pointer rounded-xl text-sm font-medium transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "min-w-[44px] h-11 cursor-pointer rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                    }
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button
                className={
                  currentPage === totalPages
                    ? "p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                    : "p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a] cursor-pointer"
                }
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <svg
                  className="w-5 h-5 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="text-center text-neutral-500 mt-4 text-sm">
              صفحة {currentPage} من {totalPages}
            </p>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
