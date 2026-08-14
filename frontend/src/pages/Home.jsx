import { useEffect, useState } from "react";
import { Search, Sparkles } from "lucide-react";
import api from "../api/axios";
import ProductCard from "../components/ProductCard";
import CategoryPill from "../components/CategoryPill";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = {};
      if (activeCategory !== "all") params.category = activeCategory;
      if (search) params.search = search;
      if (sort) params.sort = sort;
      const res = await api.get("/products", { params });
      setProducts(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const debounce = setTimeout(fetchProducts, 300);
    return () => clearTimeout(debounce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, search, sort]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 text-center">
          <div className="flex justify-center mb-3">
            <Sparkles className="w-10 h-10 text-amber-200" />
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl mb-3">
            Shop Everything You Love
          </h1>
          <p className="text-white/90 max-w-xl mx-auto mb-6">
            Electronics, fashion, home decor, sports gear & books — all in one colorful marketplace.
          </p>
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products..."
              className="w-full pl-11 pr-4 py-3 rounded-full shadow-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-amber-300"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4">
          <CategoryPill
            category={{ name: "All", icon: "✨", color: "#7C3AED" }}
            active={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
          />
          {categories.map((cat) => (
            <CategoryPill
              key={cat._id}
              category={cat}
              active={activeCategory === cat._id}
              onClick={() => setActiveCategory(cat._id)}
            />
          ))}
        </div>

        {/* Sort */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-500 text-sm">{products.length} products found</p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-purple"
          >
            <option value="">Newest</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Products grid */}
        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading products... 🛍️</div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            No products found. Try adjusting filters or run the seed script.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
