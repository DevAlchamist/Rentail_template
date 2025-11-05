import { mockListings } from '@/lib/data';
import ListingDetailClient from './ListingDetailClient';

export function generateStaticParams() {
  return mockListings.map((listing) => ({
    id: listing.id,
  }));
}

interface ListingDetailProps {
  params: {
    id: string;
  };
}

export default function ListingDetail({ params }: ListingDetailProps) {
  return <ListingDetailClient listingId={params.id} />;
}