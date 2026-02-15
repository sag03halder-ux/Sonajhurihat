import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddressManagement = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: 'Home',
      type: 'home',
      firstName: 'Jane',
      lastName: 'Doe',
      street: '123 Craft Lane',
      city: 'Artisan Village',
      state: 'CA',
      postalCode: '90210',
      country: 'United States',
      phone: '+1 (555) 123-4567',
      isDefault: true,
    },
    {
      id: 2,
      label: 'Office',
      type: 'business',
      firstName: 'Jane',
      lastName: 'Doe (Attn: Delivery)',
      street: '456 Business Park, Suite 200',
      city: 'Metro City',
      state: 'NY',
      postalCode: '10001',
      country: 'United States',
      phone: '+1 (555) 987-6543',
      isDefault: false,
    },
    {
      id: 3,
      label: "Parent's House",
      type: 'cottage',
      firstName: 'John',
      lastName: 'Doe',
      street: '789 Oak Street',
      city: 'Quiet Town',
      state: 'TX',
      postalCode: '75001',
      country: 'United States',
      phone: '+1 (555) 444-2222',
      isDefault: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [formData, setFormData] = useState({
    label: '',
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'United States',
    phone: '',
    isDefault: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const openModal = (address = null) => {
    if (address) {
      setEditingAddress(address);
      setFormData(address);
    } else {
      setEditingAddress(null);
      setFormData({
        label: '',
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: 'United States',
        phone: '',
        isDefault: false,
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingAddress(null);
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    if (editingAddress) {
      setAddresses(
        addresses.map((addr) =>
          addr.id === editingAddress.id
            ? { ...formData, id: editingAddress.id }
            : addr
        )
      );
    } else {
      setAddresses([...addresses, { ...formData, id: Date.now() }]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  const handleSetDefault = (id) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  const getIcon = (type) => {
    switch (type) {
      case 'home':
        return 'home';
      case 'business':
        return 'business';
      case 'cottage':
        return 'cottage';
      default:
        return 'location_on';
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f7f6] text-[#4b3c32] font-['Work_Sans',sans-serif]">
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <span className="material-icons text-[#ec6d13] text-3xl">local_mall</span>
                <span className="font-bold text-xl tracking-tight text-gray-900">
                  Artisan<span className="text-[#ec6d13]">Kraft</span>
                </span>
              </div>
              <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                <Link to="#" className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Shop
                </Link>
                <Link to="#" className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Artisans
                </Link>
                <Link to="#" className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  About
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                <span className="material-icons">search</span>
              </button>
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none relative">
                <span className="material-icons">shopping_cart</span>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-[#ec6d13] ring-2 ring-white"></span>
              </button>
              <div className="ml-3 relative flex items-center gap-2 cursor-pointer">
                <img
                  alt="User Avatar"
                  className="h-8 w-8 rounded-full object-cover border border-gray-200"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7Q_VFy1TKw7uaxzPytXOnjvktPECr7XaJvbngbccRi_Pi6HW36R94IRVN1z-PJkt_icbIKyw4HsG49liP17ZlYGXebzN0Xr80RUzereInBhxBMEvV0K7sA_r0WiALv1-e3meL_DslqVy2uatZUF2B-5BI8m03mzuRJaGx78iukBD4B5rOTaFoSgU5zza4yp4hUGbQNPYMw9yi2u8UlW34Ww0ZOF3oobWAth8mCB5BI0L6vHB61Or2opqFlXxiobr6GP2buQ2Xapu3"
                />
                <span className="text-sm font-medium text-gray-700 hidden md:block">Jane Doe</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
            <nav className="space-y-1">
              <Link to="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
                <span className="material-icons text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6 text-[22px]">person</span>
                <span className="truncate">Profile</span>
              </Link>
              <Link to="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
                <span className="material-icons text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6 text-[22px]">shopping_bag</span>
                <span className="truncate">Orders</span>
              </Link>
              <Link to="#" className="bg-[#ec6d13]/10 text-[#ec6d13] group rounded-md px-3 py-2 flex items-center text-sm font-medium">
                <span className="material-icons text-[#ec6d13] mr-3 flex-shrink-0 h-6 w-6 text-[22px]">location_on</span>
                <span className="truncate">Addresses</span>
              </Link>
              <Link to="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
                <span className="material-icons text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6 text-[22px]">credit_card</span>
                <span className="truncate">Payment Methods</span>
              </Link>
              <Link to="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
                <span className="material-icons text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6 text-[22px]">favorite</span>
                <span className="truncate">Wishlist</span>
              </Link>
            </nav>
          </aside>

          <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <nav aria-label="Breadcrumb" className="flex">
                  <ol className="flex items-center space-x-2">
                    <li>
                      <Link to="#" className="text-gray-400 hover:text-gray-500">
                        <span className="material-icons text-lg align-middle">home</span>
                      </Link>
                    </li>
                    <li>
                      <span className="text-gray-300">/</span>
                    </li>
                    <li>
                      <Link to="#" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                        Account
                      </Link>
                    </li>
                    <li>
                      <span className="text-gray-300">/</span>
                    </li>
                    <li>
                      <span aria-current="page" className="text-sm font-medium text-[#ec6d13]">
                        Addresses
                      </span>
                    </li>
                  </ol>
                </nav>
                <h1 className="text-3xl font-bold leading-tight text-gray-900 mt-2">
                  My Addresses
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  Manage your shipping and billing locations for faster checkout.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className={`bg-white rounded-xl shadow-sm border-2 ${
                    address.isDefault
                      ? 'border-[#ec6d13]/20'
                      : 'border-gray-200'
                  } p-6 relative flex flex-col h-full transition-shadow hover:shadow-md`}
                >
                  {address.isDefault && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#ec6d13]/10 text-[#ec6d13]">
                        Default
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-icons text-gray-400">
                      {getIcon(address.type)}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {address.label}
                    </h3>
                  </div>
                  <div className="flex-grow space-y-1 text-sm text-gray-600">
                    <p className="font-medium text-gray-900">
                      {address.firstName} {address.lastName}
                    </p>
                    <p>{address.street}</p>
                    <p>
                      {address.city}, {address.state} {address.postalCode}
                    </p>
                    <p>{address.country}</p>
                    <p className="mt-2 text-gray-500">{address.phone}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openModal(address)}
                        className="text-gray-400 hover:text-[#ec6d13] transition-colors p-1"
                        title="Edit"
                      >
                        <span className="material-icons text-xl">edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(address.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        title="Delete"
                      >
                        <span className="material-icons text-xl">delete</span>
                      </button>
                    </div>
                    {!address.isDefault && (
                      <button
                        onClick={() => handleSetDefault(address.id)}
                        className="text-sm text-gray-500 hover:text-[#ec6d13] font-medium transition-colors"
                      >
                        Set as Default
                      </button>
                    )}
                  </div>
                </div>
              ))}

              <button
                onClick={() => openModal()}
                className="group relative block w-full h-full border-2 border-gray-300 border-dashed rounded-xl p-6 text-center hover:border-[#ec6d13] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ec6d13] transition-all duration-200 hover:bg-white min-h-[250px] flex flex-col items-center justify-center gap-3"
              >
                <div className="mx-auto h-12 w-12 text-gray-400 group-hover:text-[#ec6d13] transition-colors">
                  <span className="material-icons text-5xl">add_circle_outline</span>
                </div>
                <span className="mt-2 block text-sm font-medium text-gray-900 group-hover:text-[#ec6d13]">
                  Add New Address
                </span>
              </button>
            </div>

            <div className="rounded-lg bg-blue-50 p-4 border border-blue-100">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="material-icons text-blue-400">info</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    International Shipping
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      Addresses outside the US may be subject to additional customs
                      fees upon delivery. Check our{' '}
                      <Link to="#" className="font-medium underline hover:text-blue-600">
                        shipping policy
                      </Link>{' '}
                      for more details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link to="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              © 2023 ArtisanKraft Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div
          aria-labelledby="modal-title"
          aria-modal="true"
          className="fixed inset-0 z-10 overflow-y-auto"
          role="dialog"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              aria-hidden="true"
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={closeModal}
            ></div>
            <span aria-hidden="true" className="hidden sm:inline-block sm:align-middle sm:h-screen">
              ​
            </span>
            <div className="relative inline-block align-bottom bg-white rounded-xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 border border-gray-200">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={closeModal}
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                  type="button"
                >
                  <span className="sr-only">Close</span>
                  <span className="material-icons">close</span>
                </button>
              </div>
              <div>
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  {editingAddress ? 'Edit Address' : 'Add New Address'}
                </h3>
                <form onSubmit={handleSaveAddress} className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="address-label"
                    >
                      Address Label (e.g. Home, Office)
                    </label>
                    <div className="mt-1">
                      <input
                        className="shadow-sm focus:ring-[#ec6d13] focus:border-[#ec6d13] block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        id="address-label"
                        name="label"
                        type="text"
                        value={formData.label}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="first-name"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        autocomplete="given-name"
                        className="shadow-sm focus:ring-[#ec6d13] focus:border-[#ec6d13] block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        id="first-name"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="last-name"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        autocomplete="family-name"
                        className="shadow-sm focus:ring-[#ec6d13] focus:border-[#ec6d13] block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        id="last-name"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="street-address"
                    >
                      Street address
                    </label>
                    <div className="mt-1">
                      <input
                        autocomplete="street-address"
                        className="shadow-sm focus:ring-[#ec6d13] focus:border-[#ec6d13] block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        id="street-address"
                        name="street"
                        type="text"
                        value={formData.street}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="city"
                    >
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        autocomplete="address-level2"
                        className="shadow-sm focus:ring-[#ec6d13] focus:border-[#ec6d13] block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="region"
                    >
                      State / Province
                    </label>
                    <div className="mt-1">
                      <input
                        autocomplete="address-level1"
                        className="shadow-sm focus:ring-[#ec6d13] focus:border-[#ec6d13] block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        id="region"
                        name="state"
                        type="text"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="postal-code"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        autocomplete="postal-code"
                        className="shadow-sm focus:ring-[#ec6d13] focus:border-[#ec6d13] block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        id="postal-code"
                        name="postalCode"
                        type="text"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        className="shadow-sm focus:ring-[#ec6d13] focus:border-[#ec6d13] block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        id="phone"
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6 flex items-center">
                    <input
                      className="h-4 w-4 text-[#ec6d13] focus:ring-[#ec6d13] border-gray-300 rounded"
                      id="make-default"
                      name="isDefault"
                      type="checkbox"
                      checked={formData.isDefault}
                      onChange={handleInputChange}
                    />
                    <label
                      className="ml-2 block text-sm text-gray-900"
                      htmlFor="make-default"
                    >
                      Set as default address
                    </label>
                  </div>
                  <div className="mt-8 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-[#ec6d13] text-base font-medium text-white hover:bg-[#d85f0c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ec6d13] sm:col-start-2 sm:text-sm"
                    >
                      Save Address
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ec6d13] sm:mt-0 sm:col-start-1 sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressManagement;
