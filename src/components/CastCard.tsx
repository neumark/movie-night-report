import type { CastMember } from '../data/movies'

function CastCard({ member }: { member: CastMember }) {
  return (
    <figure className="cast-member">
      {member.photo ? (
        <img src={member.photo} alt={`Portrait of ${member.name}`} />
      ) : (
        <div className="cast-photo-fallback" role="img" aria-label={`Portrait placeholder for ${member.name}`}>
          {member.name
            .split(' ')
            .map((part) => part[0])
            .join('')
            .slice(0, 2)}
        </div>
      )}
      <figcaption>
        <span className="cast-name">{member.name}</span>
        <span className="cast-role">{member.role}</span>
      </figcaption>
    </figure>
  )
}

export default CastCard
