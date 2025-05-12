"use client";
import { useUserContext } from '../context/UserContext';
import Image from 'next/image';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function UserCard() {
  const { selectedUser } = useUserContext();

  if (!selectedUser) {
    return (
      <div className="text-center text-gray-500 text-base mt-10 animate-fade-in">
        Select a user to view details
      </div>
    );
  }

  return (
    <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-lg mx-auto border border-blue-100 transition-all hover:shadow-2xl hover:scale-105 transform animate-fade-in">
      <div className="flex flex-col items-center">
        <Image
          src={selectedUser.picture.large}
          alt={`${selectedUser.name.first} ${selectedUser.name.last}`}
          width={144}
          height={144}
          className="rounded-full border-4 border-blue-100 mb-6"
        />
        <h2 className="text-3xl font-extrabold text-gray-900">
          {selectedUser.name.title} {selectedUser.name.first} {selectedUser.name.last}
        </h2>
        <p className="text-lg text-gray-600 capitalize mt-2">{selectedUser.gender}</p>
        <div className="mt-8 w-full space-y-6">
          <div className="flex items-center space-x-4">
            <EnvelopeIcon className="h-7 w-7 text-blue-500" />
            <div>
              <p className="text-sm font-bold text-gray-900">Email</p>
              <p className="text-base text-gray-700 break-all">{selectedUser.email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <PhoneIcon className="h-7 w-7 text-blue-500" />
            <div>
              <p className="text-sm font-bold text-gray-900">Phone</p>
              <p className="text-base text-gray-700">{selectedUser.phone}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPinIcon className="h-7 w-7 text-blue-500" />
            <div>
              <p className="text-sm font-bold text-gray-900">Country</p>
              <p className="text-base text-gray-700">{selectedUser.location.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
