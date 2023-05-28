import { StaffProfile } from 'src/staff/staff-profile/entities/staff-profile.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isActive: boolean;

  
//Relation Name: HARRY
  //One-to-One Relation
  @OneToOne(()=>StaffProfile, (staffprofile)=>staffprofile.authid)
  staffprofile: StaffProfile
}
