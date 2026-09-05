import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const listings = [
  { id: 1, title: "Listing One", slug: "listing-one", status: "Active" },
  { id: 2, title: "Listing Two", slug: "listing-two", status: "Pending" },
];

export default function ListingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Listings</h1>
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listings.map((listing) => (
              <TableRow key={listing.id}>
                <TableCell className="font-medium">{listing.title}</TableCell>
                <TableCell>{listing.status}</TableCell>
                <TableCell className="text-right">
                  <a
                    href={`${process.env.NEXT_PUBLIC_MAIN_SITE_URL}/listings/${listing.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      View on Site
                    </Button>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
