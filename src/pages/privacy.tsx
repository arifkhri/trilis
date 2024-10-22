import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/constant/config';

const PrivacyPolicy: React.FC = () => {
    return (
      <>
        <Head>
            <title>Data Privasi - {siteConfig.title}</title>
          <meta name="description" content="Privacy Policy for children under 13 years old" />
        </Head>

        <div className="container bg-yellow-50 flex flex-col justify-center items-center p-6">
        <Link href="/">
            <div className="flex justify-center items-center">
            <img src="/assets/logo.png" alt="simple-cart-logo" className="w-20" />
            </div>
        </Link>

          <h1 className="text-3xl font-bold mb-6 text-center mt-10">Trilis Data Privasi</h1>

          <div className="max-w-3xl text-left space-y-4">
            <p>
              <strong>Kebijakan Privasi</strong><br />
              Kami tidak mengumpulkan, menyimpan, atau membagikan informasi pribadi pengguna.
            </p>

            <p>
              <strong>1. Informasi yang Tidak Kami Kumpulkan</strong><br />
              Aplikasi ini tidak mengumpulkan informasi pribadi apa pun dari pengguna. Kami tidak mengumpulkan informasi seperti:
            </p>
            <ul className="list-disc pl-6">
              <li>Nama,</li>
              <li>Alamat email,</li>
              <li>Lokasi,</li>
              <li>Informasi kontak lainnya,</li>
              <li>atau informasi lain yang dapat mengidentifikasi pengguna secara pribadi.</li>
            </ul>
            <p>
              Aplikasi ini dirancang untuk digunakan tanpa memerlukan pengumpulan atau pemrosesan data pribadi dari pengguna, termasuk anak-anak di bawah 13 tahun.
            </p>

            <p>
              <strong>2. Informasi Non-Pribadi</strong><br />
              Kami juga tidak mengumpulkan informasi non-pribadi seperti:
            </p>
            <ul className="list-disc pl-6">
              <li>Aktivitas penggunaan aplikasi,</li>
              <li>Penggunaan perangkat atau data teknis.</li>
            </ul>
            <p>
              Aplikasi ini sepenuhnya bebas dari pengumpulan data apa pun, baik itu data pribadi atau non-pribadi.
            </p>

            <p>
              <strong>3. Persetujuan Orang Tua</strong><br />
              Karena Aplikasi tidak mengumpulkan informasi pribadi apa pun, kami tidak memerlukan persetujuan orang tua untuk penggunaan aplikasi oleh anak-anak di bawah usia 13 tahun. Aplikasi ini telah dirancang untuk sepenuhnya mematuhi Children’s Online Privacy Protection Act (COPPA) dengan memastikan bahwa tidak ada data pribadi yang dikumpulkan dari anak-anak.
            </p>

            <p>
              <strong>4. Berbagi Informasi</strong><br />
              Karena kami tidak mengumpulkan informasi pengguna, kami tidak membagikan informasi pengguna kepada pihak ketiga, baik itu untuk tujuan komersial, analitik, atau lainnya.
            </p>

            <p>
              <strong>5. Keamanan</strong><br />
              Meskipun kami tidak mengumpulkan atau menyimpan data apa pun, kami tetap berkomitmen untuk memastikan bahwa aplikasi ini aman dan terhindar dari potensi ancaman yang dapat membahayakan pengalaman pengguna.
            </p>

            <p>
              <strong>6. Perubahan Kebijakan Privasi</strong><br />
              Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu untuk memastikan bahwa aplikasi kami tetap sesuai dengan peraturan yang berlaku. Jika ada perubahan signifikan, kami akan memperbarui kebijakan ini dan memberitahukan perubahan tersebut di dalam Aplikasi.
            </p>

            <p>
              <strong>7. Kontak</strong><br />
              Jika Anda memiliki pertanyaan atau kekhawatiran mengenai Kebijakan Privasi ini, silakan hubungi kami di:
            </p>

            <p>Email: <a href="mailto:yopiyuliana02@gmail.com" className="text-blue-500">yopiyuliana02@gmail.com</a></p>
          </div>
        </div>
      </>
    );
};

export default PrivacyPolicy;
