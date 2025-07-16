"use client"

import FileUpload from "@/components/file-upload"
import { pdfToText } from "@/lib/converters"

export default function PDFToTXTPage() {
  const handleConvert = async (file: File) => {
    const blob = await pdfToText(file)
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".txt"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["application/pdf"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="PDF to TXT Converter"
        description="Extract text from PDF files"
      />
    </div>
  )
}
