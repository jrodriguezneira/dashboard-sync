import React from "react";

const DownloadButton = ({ url, filename }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(url, { method: "GET" });

      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", filename || "downloaded-file"); 
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Download
    </button>
  );
};

export default DownloadButton;
