import { Module } from '@nestjs/common'; 
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [ AuthModule, UserModule, BookmarkModule ],
  controllers: [AuthController]
})
export class AppModule {}
