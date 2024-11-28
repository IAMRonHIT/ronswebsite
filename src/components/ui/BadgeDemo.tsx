import React from 'react';
import Badge from './Badge';
import { CheckCircle, Clock, Shield, Star } from 'lucide-react';

const BadgeDemo = () => {
  return (
    <div className="space-y-4 p-8 bg-brand-darker">
      <div className="space-x-3">
        <Badge 
          variant="active" 
          icon={<CheckCircle className="h-4 w-4" />}
        >
          ACTIVE
        </Badge>
        
        <Badge 
          variant="pending" 
          icon={<Clock className="h-4 w-4" />}
        >
          PENDING
        </Badge>
        
        <Badge 
          variant="specialty" 
          icon={<Shield className="h-4 w-4" />}
        >
          SPECIALTY
        </Badge>

        <Badge 
          variant="preferred" 
          icon={<Star className="h-4 w-4" />}
        >
          PREFERRED
        </Badge>
      </div>

      <div className="space-x-3">
        <Badge 
          variant="active" 
          icon={<CheckCircle className="h-4 w-4" />}
        >
          IN-NETWORK
        </Badge>
        
        <Badge 
          variant="pending" 
          icon={<Clock className="h-4 w-4" />}
        >
          OUT-OF-NETWORK
        </Badge>

        <Badge 
          variant="standard" 
          icon={<Star className="h-4 w-4" />}
        >
          STANDARD
        </Badge>
      </div>
    </div>
  );
}

export default BadgeDemo;