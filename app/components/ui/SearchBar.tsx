import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [searchCategory, setSearchCategory] = useState('name');
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const searchCategories = [
    { value: 'name', label: 'Search by Name' },
    { value: 'hospital', label: 'Search by Hospital' },
    { value: 'condition', label: 'Search by Health Condition' },
  ];

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchCategory(e.target.value);
    setQuery(''); // Clear query when category changes
    setSearchResults([]); // Clear results when category changes
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Dummy data for search results simulation
    const allResults: { [key: string]: string[] } = {
      name: ['Dr. John Doe', 'Dr. Jane Smith', 'Dr. Alice Johnson'],
      hospital: ['City Hospital', 'Green Valley Clinic', 'HealthCare Center'],
      condition: ['Diabetes', 'Hypertension', 'Allergies'],
    };

    // Filter results based on query
    const results = allResults[searchCategory].filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <select
          value={searchCategory}
          onChange={handleCategoryChange}
          style={{ marginRight: '10px', padding: '8px', borderRadius: '4px' }}
        >
          {searchCategories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>

        <input
          type='text'
          value={query}
          onChange={handleSearch}
          placeholder={`Search by ${searchCategory}`}
          style={{ flexGrow: 1, padding: '8px', borderRadius: '4px' }}
        />
      </div>

      {searchResults.length > 0 && (
        <ul
          style={{
            listStyleType: 'none',
            padding: 0,
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        >
          {searchResults.map((result, index) => (
            <li
              key={index}
              style={{ padding: '8px', borderBottom: '1px solid #ddd' }}
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
