"use client";
import { useState, useMemo, ChangeEvent, useEffect, useRef, KeyboardEvent } from 'react';
import { useUserContext } from '../context/UserContext';
import { User } from '../types/user';

export default function SearchableDropdown() {
  const { users, setSelectedUser } = useUserContext();
  const [search, setSearch] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filteredUsers = useMemo(() => {
    if (!search) return users;
    return users.filter((user) =>
      user.name.first.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  const handleSelect = (user: User) => {
    setSelectedUser(user);
    setSearch(user.name.first);
    setIsOpen(false);
    setFocusedIndex(-1);
    inputRef.current?.focus();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setIsOpen(true);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev < filteredUsers.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && focusedIndex >= 0) {
      e.preventDefault();
      handleSelect(filteredUsers[focusedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setFocusedIndex(-1);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.dropdown')) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (focusedIndex >= 0 && listRef.current) {
      const focusedItem = listRef.current.children[focusedIndex] as HTMLElement;
      focusedItem?.scrollIntoView({ block: 'nearest' });
    }
  }, [focusedIndex]);

  return (
    <div className="relative w-full max-w-md mx-auto dropdown">
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder="Search by first name..."
        className="w-full p-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 placeholder-gray-600 font-medium text-base"
        aria-label="Search users"
        aria-autocomplete="list"
        ref={inputRef}
      />
      {isOpen && filteredUsers.length > 0 && (
        <ul
          className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-2 max-h-60 overflow-auto shadow-xl animate-fade-in"
          role="listbox"
          ref={listRef}
        >
          {filteredUsers.map((user, index) => (
            <li
              key={user.email}
              onClick={() => handleSelect(user)}
              className={`p-3 cursor-pointer hover:bg-blue-50 transition-colors text-gray-900 ${
                index === focusedIndex ? 'bg-blue-100' : ''
              }`}
              role="option"
              aria-selected={index === focusedIndex}
            >
              {user.name.first} {user.name.last}
            </li>
          ))}
        </ul>
      )}
      {isOpen && filteredUsers.length === 0 && search && (
        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-2 p-3 text-gray-500 shadow-xl animate-fade-in">
          No users found
        </div>
      )}
    </div>
  );
}
