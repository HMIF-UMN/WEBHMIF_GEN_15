import React, { useEffect } from "react";
import { Head } from "@inertiajs/react";

const surveyForm = () => {
  useEffect(() => {
    const submitForm = (event) => {
      event.preventDefault();

      const iframe = document.getElementById('hiddenIframe');
      document.getElementById('feedbackForm').setAttribute('target', 'hiddenIframe');
      document.getElementById('feedbackForm').submit();

      console.log('Form Data:', new FormData(document.getElementById('feedbackForm')));

      document.getElementById('notification').style.display = 'block';

      setTimeout(() => {
        window.location.href = 'https://hmif.umn.ac.id/';
      }, 1000);
    };

    document.getElementById('feedbackForm').addEventListener('submit', submitForm);

    return () => {
      document.getElementById('feedbackForm').removeEventListener('submit', submitForm);
    };
  }, []);

  return (
    <>
      <Head title="Survey" />
      <div className="container mx-auto my-8 p-8 bg-gray-200">
        <h2 className="text-3xl font-bold mb-4 text-black">Feedback Form - Semester Ganjil</h2>
        <h2 className="text-lg mb-4 text-red-500"><strong>Note :</strong> Pesan ini akan dikirimkan secara Anonymous</h2>
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSdqkpkH6H6dnHGL_WX-vs0DFqtNFPxUA2Wb5YGo-Lz4cAR35w/formResponse"
          method="post"
          id="feedbackForm"
        >
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">Angkatan:</label>
            <div className="flex text-black">
              {[2018, 2019, 2020, 2021, 2022, 2023].map((year) => (
                <div key={year} className="mr-4">
                  <input
                    type="radio"
                    id={`angkatan${year}`}
                    name="entry.620013288"
                    value={year}
                    className="mr-2"
                  />
                  <label htmlFor={`angkatan${year}`}>{year}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="pengalaman" className="block text-sm font-semibold text-gray-600">
              Ceritakan secara singkat tentang pengalaman anda di semester ganjil:
            </label>
            <textarea
              id="pengalaman"
              name="entry.1006524842"
              rows="4"
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Apakah anda mengalami kendala selama semester ganjil?
            </label>
            <div className="flex">
              <div className="mr-4 text-black">
                <input
                  type="radio"
                  id="kendalaYa"
                  name="entry.275183393"
                  value="Ya"
                  required
                  className="mr-2"
                />
                <label htmlFor="kendalaYa">Ya</label>
              </div>
              <div className="text-black">
                <input
                  type="radio"
                  id="kendalaTidak"
                  name="entry.275183393"
                  value="Tidak"
                  required
                  className="mr-2"
                />
                <label htmlFor="kendalaTidak">Tidak</label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="kendalaDetail" className="block text-sm font-semibold text-gray-600">
              Kendala apa saja yang anda alami di semester ganjil ini?
            </label>
            <textarea
              id="kendalaDetail"
              name="entry.85621883"
              rows="4"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="kritikSaran" className="block text-sm font-semibold text-gray-600">
              Kritik dan saran:
            </label>
            <textarea
              id="kritikSaran"
              name="entry.1163187144"
              rows="4"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
            ></textarea>
          </div>

          <input
            type="submit"
            value="Submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          />
        </form>

        <div id="notification" className="hidden bg-green-500 text-white p-4 text-center mt-4">
          Your response has been submitted.
        </div>

        <iframe
          id="hiddenIframe"
          name="hiddenIframe"
          className="hidden"
          title="Hidden Iframe"
        ></iframe>
      </div>
    </>
  );
};

export default surveyForm;
