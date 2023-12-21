import { useOrganization } from "@clerk/clerk-react";
 
export default function MemberList() {
  
  const { memberships } = useOrganization({
    memberships: {
      keepPreviousData: true,
    },
  });
 
  if (!memberships) {
    // loading state
    return null;
  }
 
  return (
    <div>
      <h2>Organization members</h2>
      <ul>
        {memberships.data?.map((membership) => (
          <li key={membership.id}>
            {membership.publicUserData.firstName} {membership.publicUserData.lastName} &lt;
            {membership.publicUserData.identifier}&gt; :: {membership.role}
          </li>
        ))}
      </ul>
 
      <button
        disabled={!memberships.hasPreviousPage}
        onClick={memberships.fetchPrevious}
      >
        Previous page
      </button>
 
      <button
        disabled={!memberships.hasNextPage}
        onClick={memberships.fetchNext}
      >
        Next page
      </button>
    </div>
  );
}