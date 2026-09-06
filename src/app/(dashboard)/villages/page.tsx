/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = 'force-dynamic';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Page() {
  const data = await prisma.village.findMany();
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold capitalize">villages</h1>
        <Link href="/villages/new">
          <Button>Add New</Button>
        </Link>
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>{item.id.slice(0, 8)}...</TableCell>
                <TableCell>{item.title || item.name || item.email || 'N/A'}</TableCell>
                <TableCell>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'}</TableCell>
              </TableRow>
            ))}
            {data.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-4">No records found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
