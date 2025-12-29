// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Edit2, MoreHorizontalIcon } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const CompaniesTable = () => {
//   const { companies = [], searchCompanyByText } = useSelector(
//   (store) => store.company
// );

// const navigate = useNavigate()
//   const [filterCompany, setFilterCompany] = useState(companies);

//   useEffect(() => {
//     const filteredCompany =
//       companies.length >= 0 &&
//       companies.filter((company) => {
//         if (!searchCompanyByText) {
//           return true;
//         }
//         return company?.name
//           ?.toLowerCase()
//           .includes(searchCompanyByText.toLowerCase());
//       });
//     setFilterCompany(filteredCompany);
//   }, [companies, searchCompanyByText]);

//   return (
//     <div>
//       <Table>
//         <TableCaption className="text-2xl font-medium ">A list of your recent registered companies</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Logo</TableHead>
//             <TableHead>Name</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filterCompany.length === 0 ? (
//             <TableRow>
//               <TableCell colSpan={4} className="text-center text-gray-400 py-6">
//                 You haven't registered any company yet...
//               </TableCell>
//             </TableRow>
//           ) : (
//             filterCompany.map((company) => (
//               <TableRow key={company._id}>
//                 <TableCell>
//                   <Avatar className="h-10 w-10">
//                     <AvatarImage src={company.logo} />
//                   </Avatar>
//                 </TableCell>

//                 <TableCell className="font-medium">{company.name}</TableCell>
//                 <TableCell>{company.createdAt?.split("T")[0]}</TableCell>
//                 <TableCell className="text-right">
//                   <Popover>
//                     <PopoverTrigger className="cursor-pointer">
//                       <MoreHorizontalIcon />
//                     </PopoverTrigger>

//                     <PopoverContent className="w-32">
//                       <div onClick={() => navigate(`/admin/companies/${company._id}`)}
//                          className="flex items-center gap-2 cursor-pointer">
//                         <Edit2 className="w-4" />
//                         <span>Edit</span>
//                       </div>
//                     </PopoverContent>
//                   </Popover>
//                 </TableCell>
//               </TableRow>
//             ))
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default CompaniesTable;

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Edit2, MoreHorizontalIcon } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// const CompaniesTable = () => {
//   const { companies = [], searchCompanyByText } = useSelector(
//     (store) => store.company
//   );

//   const navigate = useNavigate();
//   const [filterCompany, setFilterCompany] = useState(companies);

//   useEffect(() => {
//     const filteredCompany =
//       companies.length >= 0 &&
//       companies.filter((company) => {
//         if (!searchCompanyByText) {
//           return true;
//         }
//         return company?.name
//           ?.toLowerCase()
//           .includes(searchCompanyByText.toLowerCase());
//       });
//     setFilterCompany(filteredCompany);
//   }, [companies, searchCompanyByText]);

//   return (
//     <div className="border border-gray-800 rounded-xl overflow-hidden bg-[#0a0a0a] mt-5">
//       <Table>
//         <TableCaption className="pb-4 text-gray-500">
//           A list of your recent registered companies...
//         </TableCaption>
//         <TableHeader className="bg-white/5">
//           <TableRow className="border-gray-800 hover:bg-transparent">
//             {/* Headers exactly matching the cells below */}
//             <TableHead className="text-gray-300 w-[300px]">
//               Company Name
//             </TableHead>
//             <TableHead className="text-gray-300">Date</TableHead>
//             <TableHead className="text-right text-gray-300">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           <AnimatePresence>
//             {filterCompany.length === 0 ? (
//               <TableRow className="border-gray-800">
//                 <TableCell
//                   colSpan={3}
//                   className="text-center text-gray-400 py-10"
//                 >
//                   You haven't registered any company yet...
//                 </TableCell>
//               </TableRow>
//             ) : (
//               filterCompany.map((company, index) => (
//                 <motion.tr
//                   key={company._id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                   className="border-b border-gray-800 hover:bg-white/5 transition-colors group"
//                 >
//                   {/* Avatar + Name in ONE Cell for perfect alignment */}
//                   <TableCell className="py-4">
//                     <div className="flex items-center gap-4">
//                       <Avatar className="h-10 w-10 border border-gray-800 shadow-sm transition-transform group-hover:scale-105">
//                         <AvatarImage src={company.logo} />
//                       </Avatar>
//                       <span className="font-semibold text-gray-200">
//                         {company.name}
//                       </span>
//                     </div>
//                   </TableCell>

//                   <TableCell className="text-gray-400">
//                     {company.createdAt?.split("T")[0]}
//                   </TableCell>

//                   <TableCell className="text-right">
//                     <Popover>
//                       <PopoverTrigger asChild>
//                         <MoreHorizontalIcon className="ml-auto cursor-pointer text-gray-400 hover:text-white transition-colors" />
//                       </PopoverTrigger>

//                       <PopoverContent className="w-32 bg-[#121212] border-gray-800 text-white p-2">
//                         <div
//                           onClick={() =>
//                             navigate(`/admin/companies/${company._id}`)
//                           }
//                           className="flex items-center gap-3 cursor-pointer hover:bg-white/10 px-2 py-2 rounded-md transition-all text-sm"
//                         >
//                           <Edit2 className="w-4 text-amber-500" />
//                           <span>Edit</span>
//                         </div>
//                       </PopoverContent>
//                     </Popover>
//                   </TableCell>
//                 </motion.tr>
//               ))
//             )}
//           </AnimatePresence>
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default CompaniesTable;

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Edit2, MoreHorizontalIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CompaniesTable = () => {
  const { companies = [], searchCompanyByText } = useSelector(
    (store) => store.company
  );

  const navigate = useNavigate();
  const [filterCompany, setFilterCompany] = useState(companies);

  useEffect(() => {
    const filteredCompany =
      companies.length >= 0 &&
      companies.filter((company) => {
        if (!searchCompanyByText) {
          return true;
        }
        return company?.name
          ?.toLowerCase()
          .includes(searchCompanyByText.toLowerCase());
      });
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);

  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden bg-[#0a0a0a] mt-5">
      <Table>
        <TableCaption className="pb-4 text-gray-500">
          A list of your recent registered companies...
        </TableCaption>
        <TableHeader className="bg-white/5">
          <TableRow className="border-gray-800 hover:bg-transparent">
            {/* Widths ko auto rakha hai taaki equal space mile */}
            <TableHead className="text-gray-300 pl-6">Logo</TableHead>
            <TableHead className="text-gray-300">Company Name</TableHead>
            <TableHead className="text-gray-300">Date</TableHead>
            <TableHead className="text-right text-gray-300 pr-6">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <AnimatePresence>
            {filterCompany.length === 0 ? (
              <TableRow className="border-gray-800">
                <TableCell
                  colSpan={4}
                  className="text-center text-gray-400 py-10"
                >
                  You haven't registered any company yet...
                </TableCell>
              </TableRow>
            ) : (
              filterCompany.map((company, index) => (
                <motion.tr
                  key={company._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-800 hover:bg-white/5 transition-colors group"
                >
                  {/* Logo Column */}
                  <TableCell className="pl-6 py-4">
                    <Avatar className="h-10 w-10 border border-gray-800 shadow-sm transition-transform group-hover:scale-105">
                      <AvatarImage src={company.logo} />
                    </Avatar>
                  </TableCell>

                  {/* Name Column */}
                  <TableCell className="font-semibold text-gray-200">
                    {company.name}
                  </TableCell>

                  {/* Date Column */}
                  <TableCell className="text-gray-400 font-medium">
                    {company.createdAt?.split("T")[0]}
                  </TableCell>

                  {/* Action Column */}
                  <TableCell className="text-right pr-6">
                    <Popover>
                      <PopoverTrigger asChild>
                        <div className="inline-flex items-center justify-center ml-auto h-9 w-9 rounded-full hover:bg-white/10 cursor-pointer transition-colors">
                          <MoreHorizontalIcon className="text-gray-400 hover:text-white" />
                        </div>
                      </PopoverTrigger>

                      <PopoverContent className="w-32 bg-[#121212] border-gray-800 text-white p-2">
                        <div
                          onClick={() =>
                            navigate(`/admin/companies/${company._id}`)
                          }
                          className="flex items-center gap-3 cursor-pointer hover:bg-white/10 px-2 py-2 rounded-md transition-all text-sm"
                        >
                          <Edit2 className="w-4 text-amber-500" />
                          <span>Edit</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </motion.tr>
              ))
            )}
          </AnimatePresence>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
